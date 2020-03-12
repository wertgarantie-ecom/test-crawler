const axios = require('axios');
const _ = require('lodash');
const fs = require('fs');
const currentTestOverview = require('./testOverview');
const username = 'wertgarantie-ecom';
const vcsType = 'github';

const circleCiAPI = `https://circleci.com/api/v1.1/project/${vcsType}/${username}`;

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
    .then(saveToTestOverviewFile);

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
                project.testBuilds.push({
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
            testBuild.reports = await getReportsForTestBuild(project.projectName, project.reports, testBuild);
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
        });
    }
}

function saveToTestOverviewFile(projects) {
    fs.writeFileSync('src/testOverview.json', JSON.stringify(projects, null, 2));
}