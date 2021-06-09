import { Menu, MenuLink } from '@geislabs/website-ui'
import { sortBy } from '@utils'
import { Discord, GitHub, Project, Twitter } from '../../config/index'
import Link from 'next/link'
import React from 'react'

export interface CommonContentSidebarProps {
    className?: string
    itemClassName?: string
    releases?: any[]
}

export const CommonContentSidebar: React.FC<CommonContentSidebarProps> = ({
    className = '',
    itemClassName = 'block text-primary-700',
    children,
    releases = [],
}) => {
    const [release] = sortBy(releases, 'date', 'desc')
    const title = `News: ${release?.title}`
    const href = `/blog/${release?.slug}`
    return (
        <div className="space-y-5">
            {release && (
                <span className="underline text-xl text-gray-800">
                    <Link href={href}>{title}</Link>
                </span>
            )}
            <Menu title="Official channels">
                <a
                    className={itemClassName}
                    href={GitHub.getGithubRepoUrl()}
                    target="_blank"
                >
                    Source code & Issues tracker
                </a>
                <a
                    className={itemClassName}
                    href={Twitter.getTwitterProfileUrl()}
                    target="_blank"
                >
                    <span>@{Twitter.getTwitterHandle()} on Twitter</span>
                </a>
            </Menu>
            <Menu title="Join the community">
                <a className={itemClassName} href={Discord.getDiscordUrl()}>
                    <span>{Project.getProjectName()} on Discord</span>
                </a>
            </Menu>
            {children && <div>{children}</div>}
        </div>
    )
}
