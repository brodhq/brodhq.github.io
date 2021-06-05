import React from 'react'
import { ClipboardCopyIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { HeroInstall } from './HeroInstall'

export interface HeroContentProps {
    className?: string
    title: React.ReactNode
}

export const HeroContent: React.FC<HeroContentProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div>
            <HeroInstall />
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                {props.title}
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                {children}
            </p>
            <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">
                Used by
            </p>
            <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                <div className="flex flex-wrap items-start justify-between">
                    <div className="flex justify-center px-1">
                        <img
                            className="h-9 sm:h-10"
                            src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                            alt="Tuple"
                        />
                    </div>
                    <div className="flex justify-center px-1">
                        <img
                            className="h-9 sm:h-10"
                            src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                            alt="Workcation"
                        />
                    </div>
                    <div className="flex justify-center px-1">
                        <img
                            className="h-9 sm:h-10"
                            src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                            alt="StaticKit"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
