import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
import { NavLink, NavLinkProps } from '@ui'
import classNames from 'classnames'
import React from 'react'

export interface HeaderProps {
    className?: string
    brandClassName?: string
}

export const Header: React.FC<HeaderProps> = ({
    className = '',
    brandClassName = '',
}) => {
    return (
        <nav
            className={classNames(
                className,
                'relative mx-auto flex items-center justify-between px-4 sm:px-6'
            )}
            aria-label="Global"
        >
            <div className="flex items-center flex-1">
                <div className="hidden space-x-10 md:flex md:ml-32">
                    <NavList>
                        <NavItem href="/">Home</NavItem>
                        <NavItem href="/install">Install</NavItem>
                        <NavItem
                            match="/guides"
                            href="/guides/getting-started/introduction"
                        >
                            Guides
                        </NavItem>
                        {/* <NavItem href="/learning">Learning</NavItem> */}
                        <NavItem href="/cases">Use-cases</NavItem>
                        {/* <NavItem href="/development">Development</NavItem> */}
                        <NavItem match="/blog" href="/blog">
                            Blog
                        </NavItem>
                    </NavList>
                </div>
            </div>
        </nav>
    )
}

const NavList: React.FC = ({ children }) => (
    <div className="flex justify-end space-x-10">{children}</div>
)

interface NavItemProps extends NavLinkProps {}

const NavItem: React.FC<NavItemProps> = ({ children, href, ...props }) => {
    return (
        <NavLink
            href={href}
            {...props}
            className="font-medium text-white hover:text-gray-300"
        >
            {children}
        </NavLink>
    )
}
