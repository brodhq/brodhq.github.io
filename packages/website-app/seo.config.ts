import type { BlogPost } from '@geislabs/website-blog'
import type { Guide } from '@geislabs/website-content'
import config from './config.json'

const libraryName = config.library.name

const defaultSocial = {
    title: 'Declarative web-scraping and data integration for NodeJS',
    description: `${libraryName} provides a declarative NodeJS API for scraping and integrating with unstructured data sources such as APIs and websites`,
}

export const pages = {
    home: [
        {
            title: breadcrumbs(defaultSocial.title),
            description: defaultSocial.description,
            social: defaultSocial,
        },
    ] as const,
    docs: [
        {
            title: breadcrumbs('API'),
            description: `Documentation for ${libraryName}`,
            social: defaultSocial,
        },
        (guide: Guide) => ({
            title: breadcrumbs('API', guide.title),
            description: guide.title,
            social: defaultSocial,
        }),
    ] as const,
    guides: [
        {
            title: breadcrumbs('Guides'),
            description: `Guides for ${libraryName}`,
            social: defaultSocial,
        },
        (guide: Guide) => ({
            title: breadcrumbs('Guides', guide.title),
            description: guide.title,
            social: defaultSocial,
        }),
    ] as const,
    examples: [
        {
            title: breadcrumbs('Examples'),
            description: `Practical code examples for ${libraryName}`,
            social: defaultSocial,
        },
        (guide: Guide) => ({
            title: breadcrumbs('Examples', guide.title),
            description: guide.title,
            social: defaultSocial,
        }),
    ] as const,
    blog: [
        {
            title: breadcrumbs('Blog'),
            description:
                'Blog about web-scraping and data-integration in NodeJS',
            social: {
                ...defaultSocial,
                description:
                    'Blog about web-scraping and data-integration in NodeJS',
            },
        },
        (post: BlogPost) => ({
            title: breadcrumbs('Blog', post.title),
            description: post.summary,
            social: {
                title: post.title,
                description: post.summary,
            },
        }),
    ] as const,
}

function breadcrumbs(...fragments: string[]) {
    return [libraryName, ...fragments].join(' | ')
}
