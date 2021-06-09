import { Header } from '@geislabs/website-layout'
import { Github } from '@icons-pack/react-simple-icons'
import classNames from 'classnames'
import React from 'react'
import config from '../../config.json'

export interface CommonLayoutHeaderProps {
    className?: string
    itemClassName?: string
    brandClassName?: string
}

export const CommonLayoutHeader: React.FC<CommonLayoutHeaderProps> = ({
    className = '',
    brandClassName,
    itemClassName,
    ...props
}) => {
    const repoHref = `https://github.com/${config.github.repository}`
    return (
        <Header.Header
            className={classNames('h-45 py-5 mx-auto max-w-7xl', className)}
        >
            <Header.Brand className={brandClassName} href="/" />
            <Header.List
                className="space-x-10 flex items-center w-full"
                itemClassName={itemClassName}
                activeItemClassName="text-primary-600 hover:text-primary-600"
            >
                <Header.Item match="/docs" href="/docs">
                    API
                </Header.Item>
                <Header.Item
                    match="/guides"
                    href="/guides/getting-started/introduction"
                >
                    Guides
                </Header.Item>
                <Header.Item match="/examples" href="/examples">
                    Examples
                </Header.Item>
                <Header.Item match="/blog" href="/blog">
                    Blog
                </Header.Item>
            </Header.List>
            <Header.List
                itemClassName={itemClassName}
                className="flex flex-1 justify-end"
            >
                <a href={repoHref} target="_blank">
                    <Github className={classNames(itemClassName, 'h-8 w-8')} />
                </a>
            </Header.List>
        </Header.Header>
    )
}
