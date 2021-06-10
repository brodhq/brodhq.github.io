import config from '../config.json'

export function getGithubRepoUrl() {
    return `https://github.com/${config.github.repository}`
}
