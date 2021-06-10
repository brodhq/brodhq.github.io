import config from '../config.json'

/**
 * Return static website metadata
 * @returns
 */
export function useWebsite() {
    return {
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? config.website.baseUrl,
    }
}
