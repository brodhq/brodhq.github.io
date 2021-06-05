import classNames from 'classnames'
import React from 'react'

export interface BrowserProps {
    className?: string
    title?: String
}

export const Browser: React.FC<BrowserProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={classNames('', className)}>
            <div className="h-10 bg-gray-200 flex items-center pl-4">
                <div className="flex flex-1 space-x-2">
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                </div>
                <div className="flex-1 uppercase text-sm font-medium text-gray-400">
                    {props.title}
                </div>
                <div className="flex-1"></div>
            </div>
            <div>{children}</div>
        </div>
    )
}
