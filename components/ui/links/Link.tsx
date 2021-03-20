import React from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import classNames from 'classnames'

export interface LinkProps extends NextLinkProps {
    className?: string
}

export const Link: React.FC<LinkProps> = ({
    children,
    href,
    className = '',
}) => {
    return (
        <span
            className={classNames('inline-block text-primary-800', {
                [className]: className,
            })}
        >
            <NextLink href={href}>{children}</NextLink>
        </span>
    )
}
