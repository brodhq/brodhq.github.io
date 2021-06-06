import classNames from 'classnames'
import React from 'react'

export interface CallToActionButtonProps {
    className?: string
    primaryClassName?: string
    secondaryClassName?: string
    variant?: 'primary' | 'secondary'
}

export const CallToActionButton: React.FC<CallToActionButtonProps> = ({
    variant = 'primary',
    primaryClassName = 'bg-primary-600 hover:bg-primary-700',
    secondaryClassName = 'text-primary-700 bg-primary-100 hover:bg-primary-200',
    children,
    ...props
}) => (
    <div className="inline-flex">
        <a
            href="#"
            className={classNames(
                'inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full',
                {
                    [primaryClassName]: variant === 'primary',
                    [secondaryClassName]: variant === 'secondary',
                }
            )}
        >
            {children}
        </a>
    </div>
)
