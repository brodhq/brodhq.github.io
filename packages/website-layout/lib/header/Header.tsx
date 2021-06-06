import { NavLink, NavLinkProps } from '@geislabs/website-ui'
import classNames from 'classnames'
import React from 'react'

export interface HeaderProps {
    className?: string
    brandClassName?: string
    itemClassName?: string
    activeItemClassName?: string
}

export const Header: React.FC<HeaderProps> = ({
    className = '',
    brandClassName = '',
    itemClassName = '',
    activeItemClassName = '',
}) => {
    return (
        <nav
            className={classNames(
                className,
                'h-20 relative mx-auto flex items-center justify-between'
            )}
            aria-label="Global"
        >
            <div className="flex items-center flex-1">
                <div className="hidden space-x-10 md:flex">
                    <NavList
                        itemClassName={itemClassName}
                        activeItemClassName={activeItemClassName}
                    >
                        <NavItem href="/">Home</NavItem>
                        <NavItem
                            match="/docs"
                            href="/docs/protocols/introduction"
                        >
                            API
                        </NavItem>
                        <NavItem
                            match="/guides"
                            href="/guides/getting-started/introduction"
                        >
                            Guides
                        </NavItem>
                        {/* <NavItem href="/learning">Learning</NavItem> */}
                        {/* <NavItem href="/cases">Use-cases</NavItem> */}
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

const NavList: React.FC<{
    itemClassName?: string
    activeItemClassName?: string
    children: React.ReactElement[]
}> = ({ itemClassName, activeItemClassName, children }) => {
    return (
        <div className="flex justify-end space-x-10">
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    ...child.props,
                    className: classNames(child.props.className, itemClassName),
                    activeClassName: classNames(
                        child.props.activeClassName,
                        activeItemClassName
                    ),
                })
            )}
        </div>
    )
}

interface NavItemProps extends NavLinkProps {}

const NavItem: React.FC<NavItemProps> = ({
    className,
    activeClassName,
    children,
    href,
    ...props
}) => {
    return (
        <NavLink
            href={href}
            {...props}
            className={classNames('font-medium', className)}
            activeClassName={activeClassName}
        >
            {children}
        </NavLink>
    )
}
