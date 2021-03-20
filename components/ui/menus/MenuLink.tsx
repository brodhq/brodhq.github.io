import React from 'react'
import { Link, LinkProps } from '../links'

export interface MenuLinkProps extends LinkProps {
    className?: string
}

export const MenuLink: React.FC<MenuLinkProps> = ({
    children,
    href,
    className = '',
}) => {
    return (
        <li className={className}>
            <Link href={href}>{children}</Link>
        </li>
    )
}
