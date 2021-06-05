import classNames from 'classnames'
import React from 'react'

export interface LandingSectionProps {
    className?: string
}

export const LandingSection: React.FC<LandingSectionProps> = ({
    className = '',
    ...props
}) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto flex flex-col">
                <div className="mb-auto ">{props.children}</div>
            </div>
        </div>
    )
}
