import { BlogPost } from '@geislabs/website-content'

export function getBlogLink(post: BlogPost) {
    return `/blog/${post.slug}`
}
