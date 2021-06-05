import { BlogPost } from '@geislabs/website-content'
import Link from 'next/link'
import React from 'react'
import { BlogPostMetadata } from './BlogPostMetadata'

export interface BlogPostListItemProps {
    className?: string
    post: BlogPost
}

export const BlogPostListItem: React.FC<BlogPostListItemProps> = ({
    className = '',
    post,
    ...props
}) => {
    const href = `/blog/${post.slug}`
    return (
        <div className="space-y-2">
            <div>
                <h2 className="prose prose-2xl uppercase">
                    <Link href={href}>
                        <span className="no-underline cursor-pointer">
                            {post.title}
                        </span>
                    </Link>
                </h2>
                <BlogPostMetadata post={post} />
            </div>
            <p className="text-gray-600">{post.summary}</p>
            <span className="text-primary-800 underline cursor-pointer">
                <Link href={href}>Continue reading →</Link>
            </span>
        </div>
    )
}
