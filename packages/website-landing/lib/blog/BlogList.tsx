import React from 'react'

export interface BlogListProps {
    header?: React.ReactNode
}

export const BlogList: React.FC<BlogListProps> = ({ children, header }) => (
    <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        {header && <div>{header}</div>}
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {children}
        </div>
    </div>
)
