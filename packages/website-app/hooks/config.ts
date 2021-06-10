import config from '../config.json'

export function useProject() {
    return {
        name: config.library.name,
        baseUrl: config.library.name,
    }
}
