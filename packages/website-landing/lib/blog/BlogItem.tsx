import classNames from 'classnames'
import React from 'react'

export interface BlogListItemProps {
    className?: string
    linkClassName?: string
    title: string
    datetime: string
    date: string
    description: string
    href: string
}

export const BlogListItem: React.FC<BlogListItemProps> = ({ ...props }) => (
    <div className={classNames(props.className)}>
        <p className="text-sm text-gray-500">
            <time dateTime={props.datetime}>{props.date}</time>
        </p>
        <a href="#" className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{props.title}</p>
            <p className="mt-3 text-base text-gray-500">{props.description}</p>
        </a>
        <div className="mt-3">
            <a
                href={props.href}
                className={classNames(
                    'text-base font-semibold text-primary-600 hover:text-primary-500',
                    props.linkClassName
                )}
            >
                Read full story
            </a>
        </div>
    </div>
)
