import React from 'react'
import classNames from 'classnames'

export interface CodespanProps {
    className?: string
    darkmode?: boolean
    children: string
}

export const Codespan: React.FC<CodespanProps> = ({ className, children }) => {
    return (
        <span
            className={classNames(
                'text-gray-900 bg-primary-50 border border-primary-100 text-sm font-mono px-1 py-0.5',
                className
            )}
        >
            {children}
        </span>
    )
}
