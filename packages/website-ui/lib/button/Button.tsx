import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

export interface ButtonProps {
    className?: string
    minimal?: boolean
    href?: string
}

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
    if (props.href) {
        return (
            <Link href={props.href} passHref={true}>
                <a className="mt-8 inline-flex rounded-md">
                    <div
                        className={classNames(
                            'cursor-pointer flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md',
                            className
                        )}
                    >
                        {props.children}
                    </div>
                </a>
            </Link>
        )
    }
    return (
        <div className="mt-8 inline-flex rounded-md">
            <div
                className={classNames(
                    'cursor-pointer flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md',
                    className
                )}
            >
                {props.children}
            </div>
        </div>
    )
}
