import React from 'react'
import { NavLinkProps, NavLink } from '../links'

export interface MenuNavLinkProps extends NavLinkProps {
    className?: string
}

export const MenuNavLink: React.FC<MenuNavLinkProps> = ({
    children,
    ...props
}) => {
    return (
        <li>
            <NavLink {...props}>{children}</NavLink>
        </li>
    )
}
