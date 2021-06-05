import React from 'react'
import classNames from 'classnames'

export interface MenuProps {
    className?: string
    title: React.ReactNode
}

export const Menu: React.FC<MenuProps> = ({
    title,
    children,
    className = '',
}) => {
    return (
        <div className="space-y-3">
            <small className="uppercase text-gray-700">{title}</small>
            <ul className="space-y-1">{children}</ul>
        </div>
    )
}
