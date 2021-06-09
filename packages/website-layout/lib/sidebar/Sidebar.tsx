import { Menu, MenuLink } from '@geislabs/website-ui'
// import { Release } from '@geislabs/website-content'
import { sortBy } from '../utils/array'
import Link from 'next/link'
import React from 'react'

export interface SidebarProps {
    className?: string
    releases?: any[]
}

export const Sidebar: React.FC<SidebarProps> = ({
    className = '',
    releases = [],
}) => {
    const [release] = sortBy(releases, 'date', 'desc')
    const title = `News: ${release.title}`
    const href = `/blog/${release.slug}`
    return (
        <div className="space-y-5">
            {release && (
                <span className="underline text-xl text-gray-800">
                    <Link href={href}>{title}</Link>
                </span>
            )}
            <Menu title="Official channels">
                <MenuLink href="/">Source code & Issues tracker</MenuLink>
                <MenuLink href="/">#geis-lang on freenode IRC</MenuLink>
                <MenuLink href="/">@geislang on Twitter</MenuLink>
            </Menu>
            <Menu title="Join the community">
                <MenuLink href="/">Hex.pm package manager</MenuLink>
                <MenuLink href="/">Geis Forum</MenuLink>
                <MenuLink href="/">Geis on Slack</MenuLink>
            </Menu>
        </div>
    )
}
