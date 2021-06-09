import { Content } from '@geislabs/website-layout'
import React, { ReactNode } from 'react'
import { Header } from '../common'

export interface BlogLayoutViewProps {
    className?: string
    right: ReactNode
    breadcrumbs?: string[]
    description?: string
    header?: React.ReactNode
}

export const BlogLayoutView: React.FC<BlogLayoutViewProps> = ({
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
                    <Header
                        className=""
                        brandClassName="text-primary-400"
                        itemClassName="text-gray-500 hover:text-gray-600"
                    />
                    {props.header && (
                        <div className="py-20 w-full min-h-20 bg-blue-50 text-gray-800 flex justify-center">
                            <div className="mx-auto">{props.header}</div>
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
