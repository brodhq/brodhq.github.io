import { generate } from '@geislabs/website-markdown'
import { BlogPost } from '@geislabs/website-blog'
import matter from 'gray-matter'
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
        '@geislabs/website-blog/content',
        false,
        /\.md$/
    )
    const posts = []
    for (const key of context.keys()) {
        const post = key.slice(2)
        const dateString = post.slice(0, 10)
        const postname = post.slice(11)
        const content = await import(`@geislabs/website-blog/content/${post}`)
        // console.log(content.default)
        const meta = matter(content.default)
        posts.push({
            ...meta.data,
            // Scope assets under namespace
            // image: ['/', path.join(meta.data.image)].join(''),
            slug: postname.replace('.md', ''),
            date: dateString,
            content: meta.content,
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
    if (!reference) {
        throw new Error(`post with slug '${slug}' not found`)
    }
    const result = generate(reference.content)
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

function requireUncached(module: any) {
    delete require.cache[require.resolve(module)]
    return require(module)
}
