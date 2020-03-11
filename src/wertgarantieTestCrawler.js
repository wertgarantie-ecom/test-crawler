const axios = require('axios');
const _ = require('lodash');

const config = {
    username: 'wertgarantie-ecom',
    projects: [
        {
            projectName: 'bifrost',
            testJobName: 'build'
        },
        {
            projectName: 'bifrost-components',
            testJobName: 'test'
        }],
    vcsType: 'github',
    circleCiToken: process.env.CIRCLE_CI_TOKEN
};

const result = {};
const circleCiAPI = `https://circleci.com/api/v1.1/project/${config.vcsType}/${config.username}`;

const latestBuildNumbers = getLatestBuildNumbers()
    .then(projects => getBuildDataForProjects(projects))
    .then(builds => console.log(JSON.stringify(builds, null, 2)));

function getLatestBuildNumbers() {
    return Promise.all(config.projects.map(async (project) => {
        const buildNumbersUrl = `${circleCiAPI}/${project.projectName}/tree/master`;
        const response = await axios.get(buildNumbersUrl);
        if (response && response.data) {
            const latestTestJob = _.find(response.data, (buildStep) => buildStep.build_parameters.CIRCLE_JOB === project.testJobName);
            project.maxBuildNumber = latestTestJob.build_num;
            return project;
        }
        return undefined;
    }));
}

function getBuildDataForProjects(projects) {
    console.log(`get all builds for projects ${JSON.stringify(projects, null, 2)}`);
    return Promise.all(projects.map(async project => {
            const testBuilds = [];
            for (let buildNumber = project.maxBuildNumber; buildNumber <= project.maxBuildNumber; buildNumber++) {
                const buildNumbersUrl = `${circleCiAPI}/${project.projectName}/${buildNumber}`;
                console.log(`requesting build data for project ${project.projectName} and build ${buildNumber}`);
                const response = await axios.get(buildNumbersUrl);
                if (response && response.data && response.data.build_parameters.CIRCLE_JOB === project.testJobName && response.data.branch === 'master') {
                    testBuilds.push({
                        projectName: response.data.reponame,
                        status: response.data.status,
                        startTime: response.data.start_time,
                        buildNumber: response.data.build_num,
                        commitDetails: response.data.all_commit_details
                    });
                }
                console.log(`received build data for project ${project.projectName} and build ${buildNumber}`);
            }
            return testBuilds;
        }
    ));
}

function getTestMetadata() {

}

function getArtifacts() {
   
}

//
// curl https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/latest/artifacts?circle-token=:token&branch=:branch&filter=:filter
//
// curl https://circleci.com/api/v1.1/project/github/wertgarantie-ecom/bifrost?circle-token=${TOKEN}&limit=1&offset=5&filter=completed