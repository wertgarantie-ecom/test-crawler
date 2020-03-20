const axios = require('axios');
const _ = require('lodash');
const fs = require('fs');
const currentTestOverview = require('../generated/testOverview');
const username = 'wertgarantie-ecom';
const vcsType = 'github';

const circleCiAPI = `https://circleci.com/api/v1.1/project/${vcsType}/${username}`;


exports.createTestOverview = function createTestOverview() {
    for (var i = 0; i < currentTestOverview.length; i++) {
        if (!currentTestOverview[i].lastIncludedBuildNumber) {
            currentTestOverview[i].lastIncludedBuildNumber = 0;
        }
    }

    getLatestBuildNumbers()
        .then(getBuildDataForProjects)
        .then(addTestMetadataToProjects)
        .then(projects => {
            console.log(JSON.stringify(projects, null, 2));
            return projects;
        })
        .then(saveToTestOverviewFile)
        .then(toMarkdown)
        .then(persistMarkdown);
};

function getLatestBuildNumbers() {
    return Promise.all(currentTestOverview.map(async (project) => {
        const buildNumbersUrl = `${circleCiAPI}/${project.projectName}/tree/master`;
        const response = await axios.get(buildNumbersUrl);
        if (response && response.data) {
            const latestTestJob = _.find(response.data, (buildStep) => buildStep.build_parameters.CIRCLE_JOB === project.testJobName);
            project.maxIncludedBuildNumber = latestTestJob.build_num;
            return project;
        }
        return undefined;
    }));
}

async function getBuildDataForProjects(projects) {
    return await Promise.all(projects.map(async project => {
        for (let buildNumber = project.lastIncludedBuildNumber + 1; buildNumber <= project.maxIncludedBuildNumber; buildNumber++) {
            const buildNumbersUrl = `${circleCiAPI}/${project.projectName}/${buildNumber}`;
            console.log(`requesting build data for project ${project.projectName} and build ${buildNumber}`);
            const response = await axios.get(buildNumbersUrl);
            if (response && response.data && response.data.build_parameters.CIRCLE_JOB === project.testJobName && response.data.branch === 'master') {
                project.testBuilds.unshift({
                    status: response.data.status,
                    startTime: response.data.start_time,
                    buildNumber: response.data.build_num,
                    commitDetails: response.data.all_commit_details
                });
            }
            console.log(`received build data for project ${project.projectName} and build ${buildNumber}`);
        }
        project.lastIncludedBuildNumber = project.maxIncludedBuildNumber;
        return project;
    }));
}

async function addTestMetadataToProjects(projects) {
    return await Promise.all(projects.map(async project => {
        project.testBuilds = await Promise.all(project.testBuilds.map(async testBuild => {
            const metaData = await getTestMetadataToTestBuild(project.projectName, testBuild);
            if (metaData.count === 0) {
                return;
            }
            testBuild.tests = metaData;
            const reports = await getReportsForTestBuild(project.projectName, project.reports, testBuild);
            testBuild.reports = reports || [];
            return testBuild;
        }));
        return project;
    }));
}

async function getTestMetadataToTestBuild(projectName, testBuild) {
    const testsUrl = `${circleCiAPI}/${projectName}/${testBuild.buildNumber}/tests`;
    const response = await axios.get(testsUrl);
    if (response && response.data) {
        const allTests = response.data.tests.length;
        const results = _.countBy(response.data.tests, test => test.result);
        return {
            results: results,
            count: allTests
        };
    }
}

async function getReportsForTestBuild(projectName, reports, testBuild) {
    const artifactsUrl = `${circleCiAPI}/${projectName}/${testBuild.buildNumber}/artifacts`;
    const response = await axios.get(artifactsUrl);
    if (response && response.data) {
        return reports.map(report => {
            const artifact = _.find(response.data, (artifact) => artifact.path === report.path);
            if (artifact) {
                return {
                    reportName: report.name,
                    artifactUrl: artifact.url
                };
            }
            return {
                reportName: report.name,
                artifactUrl: '-'
            };
        });
    }
}

async function saveToTestOverviewFile(projects) {
    await fs.writeFileSync('generated/testOverview.json', JSON.stringify(projects, null, 2));
    return projects
}

function testBuildToTableRow(testBuild) {
    return `|${testBuild.buildNumber}|${testBuild.startTime}|${testBuild.tests.count}|${testBuild.tests.results.success}|${testBuild.tests.results.failure ? testBuild.tests.results.failure : 0}|${testBuild.reports.map(report => `[${report.artifactUrl}]|`).join('')}`
}

async function toMarkdown(projects) {
    return `
Wir haben folgende Projekte die produktiv beim Kunden eingesetzt werden:
${projects.map(project => `- ${project.projectName}`).join('\n')}

Wir unterscheiden folgende Testarten (nicht jedes Projekt benutzt alle aufgeführten Testarten):
- Unit Tests:
    Schnelle Tests zum Testen einer einzelnen Funktionalität ohne gestartete Anwendung oder Kommunikation mit Umsystemen wie Datenbanken
- Integrations Tests
    Tests den ganzheitlichen Prozess mit gestarteter Anwendung und Datenbank. Fremdsysteme werden "gemockt" (simuliert).
- UI-Tests
    Testen von UI-Komponenten innerhalb eines geöffneten Browsers (aktuell Chrome).

Alle unsere Projekte werden automatisch gebaut, getestet und deployed, sobald ein neuer Commit auf dem master registriert ist.
Anbei eine Liste aller Builds und Tests für das jeweilige Projekt:

${projects.map(project => {
        return `h2. ${project.projectName} Builds
||Build||Start Zeit||Tests||Success||Failures||${project.reports.map(report => `${report.name} Report||`).join('')}
${project.testBuilds.map(testBuildToTableRow).join('\n')}`;
    }).join('\n\n')}
`;
}

async function persistMarkdown(markdown) {
    console.log(markdown);
    await fs.writeFileSync('generated/test-overview.md', markdown);
}
