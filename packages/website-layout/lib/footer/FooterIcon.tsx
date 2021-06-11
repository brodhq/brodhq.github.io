import classNames from 'classnames'
import React from 'react'

export interface FooterIconProps {
    className?: string
    name: string
    href: string
    icon: (props: any) => React.ReactElement
}

export const FooterIcon: React.FC<FooterIconProps> = ({ ...props }) => {
    return (
        <a
            key={props.name}
            href={props.href}
            target="_blank"
            rel="noopener"
            className="text-gray-400 hover:text-gray-500"
        >
            <span className="sr-only">{props.name}</span>
            <props.icon className="h-5 w-5" aria-hidden="true" />
        </a>
    )
}
