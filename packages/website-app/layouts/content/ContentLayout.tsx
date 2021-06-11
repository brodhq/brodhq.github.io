import { Content } from '@geislabs/website-layout'
import React, { ReactNode } from 'react'
import * as Common from '../common'
import { ContentLayoutHeader } from './ContentHeader'

export interface ContentLayoutViewProps {
    className?: string
    right: ReactNode
}

export const ContentLayoutView: React.FC<ContentLayoutViewProps> = ({
    className = '',
    ...props
}) => {
    return (
        <Content.Layout
            header={<ContentLayoutHeader />}
            footer={<Common.Footer />}
            right={props.right}
        >
            {props.children}
        </Content.Layout>
    )
}
