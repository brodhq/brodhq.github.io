import { routes } from '../route.config'

/**
 * Returns route details for a static route
 * @param route
 * @returns
 */
export function getIndexRoute<TName extends keyof typeof routes>(route: TName) {
    return routes[route][0].path
}

/**
 * Returns route details for a dynamic route
 * @param route
 * @param detail
 * @returns
 */
export function getHref<
    TPages extends typeof routes,
    TName extends keyof TPages
>(
    route: TName,
    // @ts-expect-error
    detail: Parameters<TPages[TName][1]>[0]
): string {
    // @ts-expect-error
    return routes[route][1](detail).path
}
