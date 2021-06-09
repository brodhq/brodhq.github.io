import { Menu, MenuLink } from '@geislabs/website-ui'
import { sortBy } from '../utils/array'
import Link from 'next/link'
import React from 'react'

export interface SidebarProps {
    className?: string
    itemClassName?: string
    releases?: any[]
}

export const Sidebar: React.FC<SidebarProps> = ({
    className = '',
    itemClassName = 'text-primary-700',
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
                <MenuLink className={itemClassName} href="/">
                    Source code & Issues tracker
                </MenuLink>
                <MenuLink className={itemClassName} href="/">
                    #geis-lang on freenode IRC
                </MenuLink>
                <MenuLink className={itemClassName} href="/">
                    @geislang on Twitter
                </MenuLink>
            </Menu>
            <Menu title="Join the community">
                <MenuLink className={itemClassName} href="/">
                    Hex.pm package manager
                </MenuLink>
                <MenuLink className={itemClassName} href="/">
                    Geis Forum
                </MenuLink>
                <MenuLink className={itemClassName} href="/">
                    Geis on Slack
                </MenuLink>
            </Menu>
            {children && <div>{children}</div>}
        </div>
    )
}
