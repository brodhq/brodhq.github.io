import matter from 'gray-matter'
import marked from 'marked'
import yaml from 'js-yaml'
import path from 'path'
import { CustomRenderer } from './renderer'
import {
    Guide,
    GuideReference,
    BlogPost,
    Release,
    Section,
    Usecase,
} from './types'
import { sluggify } from '@utils'

export async function getAllPosts(): Promise<BlogPost[]> {
    // @ts-expect-error
    const context = require.context('../content/blog', false, /\.md$/)
    const posts = []
    for (const key of context.keys()) {
        const post = key.slice(2)
        const dateString = post.slice(0, 10)
        const content = await import(`../content/blog/${post}`)
        const meta = matter(content.default)
        posts.push({
            ...meta.data,
            slug: post.replace('.md', ''),
            date: dateString,
        })
    }
    return posts
}

export async function getAllCases(): Promise<Usecase[]> {
    // @ts-expect-error
    const context = require.context('../content/blog', false, /\.md$/)
    const posts = []
    for (const key of context.keys()) {
        const post = key.slice(2)
        const content = await import(`../content/blog/${post}`)
        const meta = matter(content.default)
        if (sluggify(meta.data.category) === 'geis-in-production') {
            posts.push({
                ...meta.data,
                slug: post.replace('.md', ''),
                tags: meta.data.tags?.split(' '),
            })
        }
    }
    return posts
}

export async function getAllReleases(): Promise<Release[]> {
    const posts = await getAllPosts()
    return posts.filter((post) => sluggify(post.category) === 'releases')
}

export async function getAllSections(): Promise<Array<Section>> {
    const sections: Section[] = []
    const contexts = [
        [
            'getting-started',
            // @ts-expect-error
            require.context(
                `../content/guides/getting-started`,
                false,
                /\.md$/
            ),
        ],
        [
            'metaprogramming',
            // @ts-expect-error
            require.context(
                `../content/guides/metaprogramming`,
                false,
                /\.md$/
            ),
        ],
    ]
    for (let [sectionName, context] of contexts) {
        const guides: GuideReference[] = []
        for (const key of context.keys()) {
            const post = key.slice(2)
            const number = Number(post.slice(0, 2))
            const content = await import(
                `../content/guides/${sectionName}/${post}`
            )
            const meta = matter(content.default)
            guides.push({
                number,
                section: meta.data.section,
                filename: post,
                title: meta.data.title,
                slug: `${sectionName}/${meta.data.slug}`,
            })
        }
        sections.push({ name: sectionName.replace('-', ' '), guides })
    }
    return sections
}

export async function getPostBySlug(slug: string) {
    const posts = await getAllPosts()
    const reference = posts.find((guide) => guide.slug === slug)
    const fileContent = await import(`../content/blog/${slug}.md`)
    const meta = matter(fileContent.default)

    const renderer = new CustomRenderer()
    const content = marked(meta.content, { renderer })

    return {
        post: reference,
        content: content,
        releases: await getAllReleases(),
    }
}

export async function getByGuideSlug(slugs: string[]): Promise<Guide> {
    const slug = path.join(...slugs)
    const sections = await getAllSections()
    const all = sections.flatMap((section) => section.guides)
    const reference = all.find((guide) => guide.slug === slug)
    const fileContent = await import(
        `../content/guides/${reference.section}/${reference.filename}`
    )
    const meta = matter(fileContent.default)
    const renderer = new CustomRenderer()
    const content = marked(meta.content, { renderer, headerIds: true })

    return {
        ...reference,
        subsections: renderer.subsections,
        content: content,
    }
}

export async function getContentBySlug(slug: string) {
    const posts = await getAllPosts()
    const reference = posts.find((guide) => guide.slug === slug)
    const fileContent = await import(`../content/${slug}.md`)
    const meta = matter(fileContent.default)

    const renderer = new CustomRenderer()
    const content = marked(meta.content, { renderer })

    return {
        ...reference,
        content: content,
        releases: await getAllReleases(),
    }
}

export async function getConfig() {
    const config = await import(`../config.yml`)
    return yaml.load(config.default)
}

export * from './types'
