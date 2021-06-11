import type { GuideReference } from '@geislabs/website-content'

export const routes = {
    example: [
        {
            path: '/examples',
        },
        (guide: GuideReference) => ({ path: `/examples/${guide.slug}` }),
    ] as const,
    guide: [
        {
            path: '/guides',
        },
        (guide: GuideReference) => ({ path: `/guides/${guide.slug}` }),
    ] as const,
    blog: [
        {
            path: '/blog',
        },
        (guide: GuideReference) => ({ path: `/blog/${guide.slug}` }),
    ] as const,
}
