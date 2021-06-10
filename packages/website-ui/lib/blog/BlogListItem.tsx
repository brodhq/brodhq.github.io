import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { ButtonPrimary } from '../button/ButtonPrimary'
import { BlogMetadata } from './BlogMetadata'
import { BlogPost } from './blogTypes'

export interface BlogListItemProps {
    className?: string
    buttonClassName?: string
    post: BlogPost
    href?: string
}

export const BlogListItem: React.FC<BlogListItemProps> = ({
    className = '',
    href = '#',
    post,
    ...props
}) => {
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
                <BlogMetadata post={post} />
            </div>
            <div className="space-y-4">
                <p className="text-gray-600">{post.summary}</p>
                <ButtonPrimary
                    className={classNames(props.buttonClassName)}
                    minimal={true}
                    href={href}
                >
                    Read more
                </ButtonPrimary>
            </div>
        </div>
    )
}
