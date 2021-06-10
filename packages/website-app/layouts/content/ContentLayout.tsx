import { Content } from '@geislabs/website-layout'
import React, { ReactNode } from 'react'
import { CommonContentHeader } from './ContentHeader'

export interface ContentLayoutViewProps {
    className?: string
    right: ReactNode
}

export const ContentLayoutView: React.FC<ContentLayoutViewProps> = ({
    className = '',
    ...props
}) => {
    return (
        <Content.Layout header={<CommonContentHeader />} right={props.right}>
            {props.children}
        </Content.Layout>
    )
}
