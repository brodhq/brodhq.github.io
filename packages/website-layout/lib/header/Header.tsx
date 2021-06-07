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
    brandClassName = 'text-gray-100',
    itemClassName = '',
    activeItemClassName = '',
}) => {
    return (
        <nav
            className={classNames(
                className,
                'h-20 relative mx-auto flex items-center justify-between max-w-7xl px-6'
            )}
            aria-label="Global"
        >
            <div className="flex items-center flex-1 space-x-16">
                <div>
                    <svg
                        width="42"
                        height="42"
                        viewBox="0 0 256 241"
                        className={brandClassName}
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M255.922 113.291C255.97 113.263 256 113.212 256 113.156V113.156C256 113.07 255.93 113 255.844 113H179.127C176.366 113 174.155 115.245 173.856 117.99C173.152 124.464 171.082 130.736 167.762 136.382C163.594 143.469 157.607 149.314 150.422 153.311C143.237 157.307 135.114 159.311 126.894 159.114C118.674 158.917 110.657 156.526 103.671 152.19C96.686 147.853 90.9866 141.728 87.1633 134.449C83.34 127.17 81.5318 119.001 81.926 110.789C82.3201 102.576 84.9022 94.6183 89.4049 87.7389C92.992 82.2583 97.6942 77.621 103.184 74.1174C105.511 72.6317 106.543 69.6546 105.318 67.1798L73.4317 2.76704C72.2067 0.292245 69.2018 -0.729482 66.7767 0.591312C48.251 10.6812 32.4817 25.2079 20.9008 42.9017C8.40597 61.9919 1.24081 84.0749 0.147136 106.864C-0.946533 129.654 4.07105 152.321 14.6804 172.52C25.2898 192.719 41.1053 209.715 60.4895 221.749C79.8738 233.783 102.122 240.416 124.931 240.963C147.74 241.51 170.281 235.951 190.22 224.86C203.681 217.372 215.627 207.547 225.526 195.902C226.863 194.329 227.029 192.084 225.997 190.296L202.634 149.83C201.253 147.439 202.073 144.381 204.464 143L255.922 113.291Z"
                            fill="#C4C4C4"
                        />
                    </svg>
                </div>
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
                        <NavItem match="/examples" href="/examples">
                            Examples
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
