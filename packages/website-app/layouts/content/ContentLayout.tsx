import { Content } from '@geislabs/website-layout'
import React, { ReactNode } from 'react'
import { ContentHeader } from '../common'

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
            header={<ContentHeader />}
            title={title}
            description={description}
            right={props.right}
        >
            {props.children}
        </Content.Layout>
    )
}
