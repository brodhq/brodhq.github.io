import type { BlogPost } from '@geislabs/website-content'
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
            <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">{post.summary}</p>
            </a>
            <div className="mt-3">
                <a
                    href={'#'}
                    className={classNames(
                        'text-base font-semibold',
                        linkClassName
                    )}
                >
                    Read full story
                </a>
            </div>
        </div>
    )
}
