import config from '../config.json'

/**
 * Return static website metadata
 * @returns
 */
export function useWebsite() {
    return {
        ...config.website,
        name: config.library.name,
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? config.website.baseUrl,
        social: {
            github: {
                url: config.github.repositoryUrl,
            },
            twitter: {
                url: config.twitter.profileUrl,
            },
        },
    }
}
