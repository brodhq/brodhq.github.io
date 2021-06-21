import { Header } from '@geislabs/website-layout'
import { Github } from '@icons-pack/react-simple-icons'
import classNames from 'classnames'
import BrandIcon from '../../public/icon-brand-text-white.svg'
import { GitHub } from '../../constants/index'
import React from 'react'

export interface CommonLayoutHeaderProps {
    className?: string
    itemClassName?: string
    toggleClassName?: string
    brandClassName?: string
    brandPopoverClassName?: string
}

export const CommonLayoutHeader: React.FC<CommonLayoutHeaderProps> = ({
    className = '',
    brandClassName,
    itemClassName,
    brandPopoverClassName = 'text-primary-400',
    ...props
}) => {
    return (
        <Header.Header
            className={classNames('mx-auto max-w-7xl', className)}
            toggleClassName={props.toggleClassName}
            itemClassName={itemClassName}
            brandClassName={brandClassName}
            itemPopoverClassName="text-gray-700 hover:text-gray-800"
            brandPopoverClassName={brandPopoverClassName}
            brand={
                <Header.Brand className="mt-0.5 " href="/">
                    <BrandIcon className="fill-current" />
                </Header.Brand>
            }
            right={[
                <a
                    href={GitHub.getGithubRepoUrl()}
                    rel="noopener"
                    target="_blank"
                >
                    <Github className={classNames('h-8 w-8')} />
                </a>,
            ]}
        >
            <Header.Item
                activeClassName="text-primary-600 hover:text-primary-600"
                match="/docs"
                href="/docs"
            >
                API
            </Header.Item>
            <Header.Item
                activeClassName="text-primary-600 hover:text-primary-600"
                match="/guides"
                href="/guides/getting-started/introduction"
            >
                Guides
            </Header.Item>
            <Header.Item
                activeClassName="text-primary-600 hover:text-primary-600"
                match="/examples"
                href="/examples"
            >
                Examples
            </Header.Item>
            <Header.Item
                activeClassName="text-primary-600 hover:text-primary-600"
                match="/blog"
                href="/blog"
            >
                Blog
            </Header.Item>
        </Header.Header>
    )
}
