import { BlogPost } from '@api'
import { formatDate } from '@utils'
import React from 'react'

export interface BlogPostMetadataProps {
    className?: string
    post: BlogPost
}

export const BlogPostMetadata: React.FC<BlogPostMetadataProps> = ({
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
