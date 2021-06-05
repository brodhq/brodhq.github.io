import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

export interface ContentMainProps {
    className?: string
    subtitle: string
    title: string
    action?: React.ReactNode
}

export const ContentMain: React.FC<ContentMainProps> = (props) => {
    return (
        <div className="pt-12 sm:pt-16 lg:pt-20">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
                {props.subtitle && (
                    <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">
                        {props.subtitle.toUpperCase()}
                    </h2>
                )}
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {props.title}
                </p>
            </div>
            <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">{props.children}</p>
            </div>
            {props.action}
        </div>
    )
}
