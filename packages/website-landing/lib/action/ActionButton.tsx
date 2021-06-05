import classNames from 'classnames'
import React from 'react'

export interface CallToActionButtonProps {
    className?: string
    variant?: 'primary' | 'secondary'
}

export const CallToActionButton: React.FC<CallToActionButtonProps> = ({
    variant = 'primary',
    children,
    ...props
}) => (
    <div className="inline-flex rounded-md shadow">
        <a
            href="#"
            className={classNames(
                'inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md',
                {
                    'text-white bg-primary-600 hover:bg-primary-700':
                        variant === 'primary',
                    'text-primary-700 bg-primary-100 hover:bg-primary-200':
                        variant === 'secondary',
                }
            )}
        >
            {children}
        </a>
    </div>
)
