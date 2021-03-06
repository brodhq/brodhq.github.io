import type { BlogPost } from '@geislabs/website-content'
import { Link } from '@geislabs/website-ui'
import classNames from 'classnames'
import React from 'react'

const INTL = new Intl.DateTimeFormat(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
})

export interface BlogListItemProps {
    className?: string
    linkClassName?: string
    post: BlogPost
    href: string
}

export const BlogListItem: React.FC<BlogListItemProps> = ({
    post,
    linkClassName = 'text-blue-400 hover:text-blue-500',
    ...props
}) => {
    return (
        <div className={classNames(props.className)}>
            <p className="text-sm text-gray-500">
                <time dateTime={post.date}>
                    {INTL.format(new Date(post.date))}
                </time>
            </p>
            <a href={props.href} className="mt-2 block">
                <h4 className="text-xl font-semibold text-gray-900">
                    {post.title}
                </h4>
            </a>
            <p className="mt-3 text-base text-gray-500">{post.summary}</p>
            <div className="mt-3">
                <Link
                    href={props.href}
                    className={classNames(
                        'text-base font-semibold',
                        linkClassName
                    )}
                >
                    Read full story
                </Link>
            </div>
        </div>
    )
}
