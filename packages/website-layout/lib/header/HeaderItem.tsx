import { NavLink, NavLinkProps } from '@geislabs/website-ui'
import classNames from 'classnames'
import React from 'react'

export interface HeaderItemProps extends NavLinkProps {}

export const HeaderItem: React.FC<HeaderItemProps> = ({
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
