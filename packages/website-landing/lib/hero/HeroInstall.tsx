import React, { useEffect } from 'react'
import { ClipboardCopyIcon } from '@heroicons/react/solid'
import { CheckIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

export interface HeroInstallProps {
    className?: string
}

export const HeroInstall: React.FC<HeroInstallProps> = ({
    className,
    children,
    ...props
}) => {
    const [copied, setCopied] = React.useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (copied) setCopied(false)
        }, 1000)

        return () => clearTimeout(timeout)
    }, [copied])

    const handleClick = () => {
        console.log('clicked')
        setCopied(true)
    }

    return (
        <div
            className="cursor-pointer group inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
            onClick={handleClick}
        >
            <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-primary-500 rounded-full">
                Install
            </span>
            <pre className="ml-4 text-sm">npm install geis --save</pre>
            {copied ? (
                <CheckIcon
                    className="ml-4 w-5 h-5 text-white group-hover:text-gray-200"
                    aria-hidden="true"
                />
            ) : (
                <ClipboardCopyIcon
                    className="ml-4 w-5 h-5 text-white group-hover:text-gray-200"
                    aria-hidden="true"
                />
            )}
        </div>
    )
}
