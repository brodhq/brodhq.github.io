import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

export interface FooterItemProps {
    className?: string
    href: string
}

export const FooterItem: React.FC<FooterItemProps> = ({ ...props }) => {
    return (
        <div className={classNames('px-5 py-2', props.className)}>
            <Link href={props.href} passHref={true}>
                <a className="text-base text-gray-500 hover:text-gray-900">
                    {props.children}
                </a>
            </Link>
        </div>
    )
}
