import React from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/router'

export interface NavLinkProps extends NextLinkProps {
    className?: string
    exact?: boolean
    match?: string
    reverse?: boolean
}

export const NavLink: React.FC<NavLinkProps> = ({
    children,
    href,
    exact = true,
    reverse = false,
    className = '',
    ...props
}) => {
    const router = useRouter()
    const match = isMatch(
        props.match ? props.match : href.toString(),
        router.asPath,
        props.match ? false : exact
    )
    return (
        <span
            className={classNames('py-1 px-2 select-none', {
                [className]: className,
                'text-gray-500': (!match && !reverse) || (reverse && match),
                'text-primary-800': (match && !reverse) || (!match && reverse),
            })}
        >
            <NextLink href={href}>{children}</NextLink>
        </span>
    )
}

const isMatch = (match: string, pathname: string, exact = false) =>
    exact ? match === pathname : pathname.startsWith(match)
