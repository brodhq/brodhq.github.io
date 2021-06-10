import { NavLinkProps } from '@geislabs/website-ui'
import classNames from 'classnames'
import React from 'react'
import { HeaderItem } from './HeaderItem'

export interface HeaderBrandProps extends NavLinkProps {}

export const HeaderBrand: React.FC<HeaderBrandProps> = ({
    className,
    children,
    href,
    ...props
}) => {
    return (
        <HeaderItem
            className={classNames('cursor-pointer', className)}
            href="/"
            passHref={true}
        >
            {React.cloneElement(
                // @ts-expect-error
                children,
                {
                    // @ts-expect-error
                    ...children.props,
                    className: className,
                }
            )}
        </HeaderItem>
    )
}
