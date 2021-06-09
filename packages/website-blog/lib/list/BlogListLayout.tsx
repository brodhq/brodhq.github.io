import { Content } from '@geislabs/website-layout'
import React, { ReactNode } from 'react'

export interface BlogListLayoutProps {
    className?: string
    right: ReactNode
    breadcrumbs?: string[]
    description?: string
    header?: React.ReactNode
    hero?: React.ReactNode
}

export const BlogListLayout: React.FC<BlogListLayoutProps> = ({
    className = '',
    breadcrumbs = [],
    description = '',
    ...props
}) => {
    const title = ['Krans', ...breadcrumbs].join(' | ')
    return (
        <Content.Layout
            header={
                <div className="">
                    {props.header}
                    {props.hero && (
                        <div className="py-20 w-full min-h-20 bg-blue-50 text-gray-800 flex justify-center">
                            <div className="mx-auto">{props.hero}</div>
                        </div>
                    )}
                </div>
            }
            title={title}
            description={description}
            right={props.right}
        >
            {props.children}
        </Content.Layout>
    )
}