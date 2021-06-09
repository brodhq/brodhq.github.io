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
        <HeaderItem className="cursor-pointer" href="/">
            <svg
                width="42"
                height="42"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M36 18C36 21.2085 35.1424 24.3586 33.516 27.1243C31.8896 29.89 29.5536 32.1707 26.7497 33.7303C23.9458 35.2899 20.776 36.0717 17.5685 35.9948C14.3609 35.9179 11.2322 34.985 8.50634 33.2928C5.78043 31.6006 3.55637 29.2105 2.06443 26.37C0.572492 23.5296 -0.133106 20.3419 0.0206917 17.1372C0.174489 13.9324 1.18209 10.827 2.93918 8.14243C4.69627 5.45788 7.13897 3.29176 10.0144 1.86835L15.1222 12.1867C14.086 12.6996 13.2058 13.4802 12.5726 14.4477C11.9394 15.4151 11.5763 16.5342 11.5208 17.6891C11.4654 18.844 11.7197 19.9927 12.2573 21.0163C12.795 22.0399 13.5965 22.9012 14.5788 23.511C15.5611 24.1209 16.6886 24.457 17.8445 24.4848C19.0004 24.5125 20.1427 24.2307 21.1531 23.6687C22.1635 23.1067 23.0054 22.2848 23.5915 21.2881C24.1776 20.2914 24.4866 19.1562 24.4866 18H36Z"
                    className={className}
                    fill="currentColor"
                />
            </svg>
        </HeaderItem>
    )
}
