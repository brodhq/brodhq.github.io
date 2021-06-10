import type { BlogPost } from '@geislabs/website-blog'
import type { Guide } from '@geislabs/website-content'

export const pages = {
    home: [
        {
            title: breadcrumbs('Data to enrich your online business'),
            description: 'Homepage for Krans',
        },
    ] as const,
    docs: [
        {
            title: breadcrumbs('API'),
            description: 'Documentation for Krans',
        },
        (guide: Guide) => ({
            title: breadcrumbs('API', guide.title),
            description: guide.title,
        }),
    ] as const,
    guides: [
        {
            title: breadcrumbs('Guides'),
            description: 'Guides for Krans',
        },
        (guide: Guide) => ({
            title: breadcrumbs('Guides', guide.title),
            description: guide.title,
        }),
    ] as const,
    examples: [
        {
            title: breadcrumbs('Examples'),
            description: 'Practical code examples for Krans',
        },
        (guide: Guide) => ({
            title: breadcrumbs('Examples', guide.title),
            description: guide.title,
        }),
    ] as const,
    blog: [
        {
            title: breadcrumbs('Blog'),
            description:
                'Blog about web-scraping and data-integration in NodeJS',
        },
        (post: BlogPost) => ({
            title: breadcrumbs('Blog', post.title),
            description: post.summary,
        }),
    ] as const,
}

function breadcrumbs(...fragments: string[]) {
    return ['Krans', ...fragments].join(' | ')
}
