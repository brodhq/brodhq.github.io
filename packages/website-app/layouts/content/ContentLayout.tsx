import { Content } from '@geislabs/website-layout'
import React, { ReactNode } from 'react'
import { Header } from '../common'

export interface ContentLayoutViewProps {
    className?: string
    right: ReactNode
    breadcrumbs?: string[]
    description?: string
}

export const ContentLayoutView: React.FC<ContentLayoutViewProps> = ({
    className = '',
    breadcrumbs = [],
    description = '',
    ...props
}) => {
    const title = ['Krans', ...breadcrumbs].join(' | ')
    return (
        <Content.Layout
            header={
                <Header
                    brandClassName="text-primary-400"
                    itemClassName="text-gray-500 hover:text-gray-600"
                />
            }
            title={title}
            description={description}
            right={props.right}
        >
            {props.children}
        </Content.Layout>
    )
}
