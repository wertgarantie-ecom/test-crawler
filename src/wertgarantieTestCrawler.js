const axios = require('axios');
const _ = require('lodash');

const config = {
    username: 'wertgarantie-ecom',
    projects: [
        {
            projectName: 'bifrost',
            circleJob: 'build'
        },
        {
            projectName: 'bifrost-components',
            circleJob: 'test'
        }],
    vcsType: 'github',
    circleCiToken: process.env.CIRCLE_CI_TOKEN
};

const result = {};
const circleCiAPI = `https://circleci.com/api/v1.1/project/${config.vcsType}/${config.username}`;

const latestBuildNumbers = getLatestBuildNumbers()
    .then(buildNumbers => console.log(JSON.stringify(buildNumbers, null, 2)));

function getLatestBuildNumbers() {
    return Promise.all(config.projects.map(async (project) => {
        const buildNumbersUrl = `${circleCiAPI}/${project.projectName}/tree/master`;
        const response = await axios.get(buildNumbersUrl);
        if (response && response.data) {
            const latestTestJob = _.find(response.data, (buildStep) => buildStep.build_parameters.CIRCLE_JOB === project.circleJob)
            return {
                projectName: project,
                buildNumber: latestTestJob.build_num
            };
        }
        return undefined;
    }));
}

function getBuildDataForProject(projectName) {

}
//
// curl https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/latest/artifacts?circle-token=:token&branch=:branch&filter=:filter
//
// curl https://circleci.com/api/v1.1/project/github/wertgarantie-ecom/bifrost?circle-token=${TOKEN}&limit=1&offset=5&filter=completed