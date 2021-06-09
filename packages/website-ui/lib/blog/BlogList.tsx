import classNames from 'classnames'
import React from 'react'

export interface BlogListProps {
    className?: string
}

export const BlogList: React.FC<BlogListProps> = ({
    className = '',
    ...props
}) => {
    return (
        <ul
            className={classNames(
                'space-y-8 divide-y-2 divide-gray-200',
                className
            )}
        >
            {props.children}
        </ul>
    )
}
