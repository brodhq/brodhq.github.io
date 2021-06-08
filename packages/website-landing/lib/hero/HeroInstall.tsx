import React from 'react'
import { ClipboardCopyIcon } from '@heroicons/react/solid'
import { CheckIcon } from '@heroicons/react/outline'
import useClipboard from 'react-use-clipboard'

export interface HeroInstallProps {
    className?: string
    onCopy: () => void
    value: string
}

export const HeroInstall: React.FC<HeroInstallProps> = ({
    className,
    children,
    value,
    ...props
}) => {
    const [copied, setCopied] = useClipboard(value, {
        successDuration: 1000,
    })

    const handleClick = () => {
        if (!copied) {
            props.onCopy()
            setCopied()
        }
    }

    return (
        <div
            className="cursor-pointer group inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-300"
            onClick={handleClick}
        >
            <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-primary-500 rounded-full">
                Install
            </span>
            <pre className="ml-4 text-sm">{value}</pre>
            {copied ? (
                <CheckIcon
                    className="ml-4 w-5 h-5 text-white group-hover:text-gray-300"
                    aria-hidden="true"
                />
            ) : (
                <ClipboardCopyIcon
                    className="ml-4 w-5 h-5 text-white group-hover:text-gray-300"
                    aria-hidden="true"
                />
            )}
        </div>
    )
}
