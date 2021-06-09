import { generate } from '@geislabs/website-markdown'
import { BlogPost } from '@geislabs/website-blog'
import matter from 'gray-matter'
import path from 'path'
import { sortBy, sluggify } from './utils'

export * from './guides'
export * from './docs'
export * from './examples'

export async function getMostRecentPosts(limit = 10): Promise<BlogPost[]> {
    const posts = await getAllPosts()
    return sortBy(posts, 'date', 'desc').slice(0, limit)
}

export async function getAllPosts(): Promise<BlogPost[]> {
    // @ts-expect-error
    const context = require.context(
        '../node_modules/@geislabs/website-blog/content',
        false,
        /\.md$/
    )
    const posts = []
    for (const key of context.keys()) {
        const post = key.slice(2)
        const dateString = post.slice(0, 10)
        const content = await import(
            `../node_modules/@geislabs/website-blog/content/${post}`
        )
        const meta = matter(content.default)
        posts.push({
            ...meta.data,
            // Scope assets under namespace
            // image: ['/', path.join(meta.data.image)].join(''),
            slug: post.replace('.md', ''),
            date: dateString,
        })
    }
    // @ts-expect-error
    return posts
}

export async function getAllReleases(): Promise<BlogPost[]> {
    const posts = await getAllPosts()
    return posts.filter(
        (post) => post.category && sluggify(post.category) === 'releases'
    )
}

export async function getPostBySlug(slug: string) {
    const posts = await getAllPosts()
    const reference = posts.find((guide) => guide.slug === slug)
    const fileContent = await import(
        `../node_modules/@geislabs/website-blog/content/${slug}.md`
    )
    const result = generate(fileContent.default)
    return {
        post: reference,
        content: result.content,
        releases: await getAllReleases(),
    }
}

export async function getContentBySlug(slug: string) {
    const posts = await getAllPosts()
    const reference = posts.find((guide) => guide.slug === slug)
    const fileContent = await import(`../content/${slug}.md`)
    const result = generate(fileContent.default)
    return {
        ...reference,
        content: result.content,
        releases: await getAllReleases(),
    }
}

export async function getConfig() {
    return {
        title: 'Krans',
        description: 'Krans',
    }
}

export * from './types'
