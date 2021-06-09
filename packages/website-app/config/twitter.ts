import config from '../config.json'

export function getTwitterHandle() {
    return config.twitter.handle
}

export function getTwitterProfileUrl() {
    return config.twitter.profileUrl
}
