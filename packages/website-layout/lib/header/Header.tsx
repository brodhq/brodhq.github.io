import classNames from 'classnames'
import React from 'react'

export interface HeaderProps {
    className?: string
    brandClassName?: string
    itemClassName?: string
    activeItemClassName?: string
}

export const Header: React.FC<HeaderProps> = ({ className = '', children }) => {
    return (
        <nav
            className={classNames(
                className,
                'h-20 relative mx-auto flex items-center justify-between max-w-7xl px-6'
            )}
            aria-label="Global"
        >
            <div className="flex items-center flex-1 space-x-16">
                {children}
            </div>
        </nav>
    )
}
