import { Content } from '@geislabs/website-layout'
import { Meta } from 'components/Meta'
import React, { ReactNode } from 'react'
import { ContentHeader } from '../common'

export interface ContentLayoutViewProps {
    className?: string
    right: ReactNode
}

export const ContentLayoutView: React.FC<ContentLayoutViewProps> = ({
    className = '',
    ...props
}) => {
    return (
        <Content.Layout header={<ContentHeader />} right={props.right}>
            {props.children}
        </Content.Layout>
    )
}
