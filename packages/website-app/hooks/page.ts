import { pages } from '../seo.config'

/**
 * Returns page details for a static page
 * @param page
 * @returns
 */
export function useIndex<TName extends keyof typeof pages>(page: TName) {
    return pages[page][0]
}

/**
 * Returns page details for a dynamic page
 * @param page
 * @param detail
 * @returns
 */
export function useDetail<
    TPages extends typeof pages,
    TName extends keyof TPages
>(
    page: TName,
    // @ts-expect-error
    detail: Parameters<TPages[TName][1]>[0]
    // @ts-expect-error
): ReturnType<TPages[TName][1]> {
    // @ts-expect-error
    return pages[page][1](detail)
}
