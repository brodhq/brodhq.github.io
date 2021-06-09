import type { BlogPost, Release } from '@geislabs/website-content'
import { Blog } from '@geislabs/website-ui'
import React from 'react'

export interface BlogListPageProps {
    description: string
    posts: BlogPost[]
    releases: Release[]
    getBlogLink: (post: BlogPost) => string
}

export const BlogListPage: React.FC<BlogListPageProps> = ({ ...props }) => {
    return (
        <Blog.List>
            {props.posts.map((post) => (
                <Blog.Item
                    href={props.getBlogLink(post)}
                    className="pb-8"
                    buttonClassName="text-primary-500"
                    post={post}
                />
            ))}
        </Blog.List>
    )
}

export function formatDate(slug: string | Date) {
    const date = typeof slug === 'string' ? new Date(slug) : slug
    const formatter = new Intl.DateTimeFormat(undefined, {
        // @ts-expect-error
        dateStyle: 'long',
    })
    return formatter.format(date)
}
