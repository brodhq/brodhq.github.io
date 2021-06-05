import classNames from 'classnames'
import React from 'react'

export interface CallToActionContainerProps {
    className?: string
}

export const CallToActionContainer: React.FC<CallToActionContainerProps> = ({
    className,
    children,
}) => (
    <div
        className={classNames(
            'max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8',
            className
        )}
    >
        {children}
    </div>
)
