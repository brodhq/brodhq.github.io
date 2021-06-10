import type { BlogPost } from '@geislabs/website-blog'

export interface PageMeta {
    title: string
    description: string
}

export type PageMapping = {
    [P in PageName extends string ? PageName : PageName[0]]: Extract<
        PageName,
        P
    > extends Array<any>
        ? (value: P[1]) => PageMeta
        : PageMeta
}

export type PageName =
    | 'home'
    | 'docs'
    | 'guides'
    | 'examples'
    | 'blog'
    | ['blog-post', BlogPost]

const mapping: PageMapping = {
    home: {
        title: '',
        description: '',
    },
    docs: {
        title: '',
        description: '',
    },
    guides: {
        title: '',
        description: '',
    },
    examples: {
        title: '',
        description: '',
    },
}

export function getPageMeta(pagename: PageName): PageMeta {
    const found = mapping[pagename]
    if (!found) {
        throw new Error(`page meta for unknown page '${pagename}' requessed`)
    }
    return found
}
