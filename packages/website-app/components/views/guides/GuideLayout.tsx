import { Release, Section } from '@geislabs/website-content'
import { Content } from '@geislabs/website-layout'
import classNames from 'classnames'
import React from 'react'
import { GuideMenu } from './GuideMenu'

export interface GuideLayoutProps {
    className?: string
    sections: Section[]
    releases: Release[]
}

export const GuideLayout: React.FC<GuideLayoutProps> = ({
    className = '',
    children,
    releases,
    ...props
}) => {
    return (
        <Content.Layout
            className={classNames('space-y-3', { [className]: className })}
            title="Guides"
            description="Guides"
            right={<GuideMenu sections={props.sections} releases={releases} />}
        >
            {children}
        </Content.Layout>
    )
}
