import { Header } from '@geislabs/website-layout'
import { Github } from '@icons-pack/react-simple-icons'
import classNames from 'classnames'
import BrandIcon from '../../public/icon-brand-grayscale.svg'
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
                <Header.Brand href="/">
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.7977 0.817936C19.8236 0.274988 21.912 -3.89905e-07 24.0094 0L24.0094 12.0023C22.9607 12.0023 21.9165 12.1398 20.9035 12.4113L17.7977 0.817936ZM36 3.20669C34.1836 2.1578 32.2376 1.35157 30.2117 0.808622L27.1059 12.402C28.1188 12.6734 29.0918 13.0765 30 13.601L36 3.20669ZM44.7846 35.9981C46.891 32.3489 48 28.2095 48 23.9958H36C36 26.1026 35.4455 28.1723 34.3923 29.9969C33.3391 31.8215 31.8242 33.3367 30 34.3901C28.1758 35.4435 26.1064 35.9981 24 35.9981C21.8936 35.9981 19.8242 35.4435 18 34.3901C16.1758 33.3367 14.6609 31.8215 13.6077 29.9969C12.5545 28.1723 12 26.1026 12 23.9958C12 21.8889 12.5545 19.8192 13.6077 17.9946C14.6609 16.17 16.1758 14.6549 18 13.6015L12 3.20718C8.35154 5.31402 5.32183 8.34431 3.21539 11.9935C1.10895 15.6426 0 19.7821 0 23.9958C0 28.2095 1.10895 32.3489 3.21539 35.9981C5.32183 39.6472 8.35154 42.6775 12 44.7844C15.6485 46.8912 19.7871 48.0004 24 48.0004C28.2129 48.0004 32.3515 46.8912 36 44.7844C39.6485 42.6775 42.6782 39.6472 44.7846 35.9981ZM47.1916 17.7918C46.1012 13.7216 43.9589 10.0103 40.9799 7.03079L32.4946 15.5177C33.9841 17.0075 35.0553 18.8631 35.6005 20.8982L47.1916 17.7918Z"
                            fill="currentColor"
                        />
                    </svg>
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
