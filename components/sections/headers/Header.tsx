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
        <header className={classNames('flex', { [className]: className })}>
            <div className={classNames('flex-1', brandClassName)}>
                <img
                    className="h-12"
                    src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo4.jpg"
                    alt=""
                />
            </div>
            <div>
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
        </header>
    )
}

const NavList: React.FC = ({ children }) => (
    <ul className="flex justify-end space-x-4">{children}</ul>
)

interface NavItemProps extends NavLinkProps {}

const NavItem: React.FC<NavItemProps> = ({ children, href, ...props }) => {
    return (
        <li>
            <NavLink href={href} {...props}>
                {children}
            </NavLink>
        </li>
    )
}
