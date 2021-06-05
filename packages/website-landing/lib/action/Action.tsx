import classNames from 'classnames'
import React from 'react'

export interface CallToActionProps {
    className?: string
    title: React.ReactNode
}

export const CallToAction: React.FC<CallToActionProps> = ({
    title,
    children,
    ...props
}) => (
    <>
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
        </h2>
        <div className="mt-8 flex justify-center space-x-5">{children}</div>
    </>
)
