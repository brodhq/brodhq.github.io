import React from 'react'
import { BlogPost } from './blogTypes'

export interface BlogMetadataProps {
    className?: string
    post: BlogPost
}

export const BlogMetadata: React.FC<BlogMetadataProps> = ({
    className = '',
    post,
}) => {
    return (
        <p className="text-gray-400 prose-sm">
            <span className="italic">{formatDate(post.date)}</span> ·{' '}
            <span className="italic">by {post.author}</span> ·{' '}
            <span>
                <span className="italic">in </span>
                <a className="underline" href="">
                    {post.category}
                </a>
            </span>
        </p>
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
