import classNames from 'classnames'
import React from 'react'

export interface FeatureListProps {
    emphasizeClassName: string
    title: React.ReactNode
    subtitle: React.ReactNode
    description: React.ReactNode
}

export const FeatureList: React.FC<FeatureListProps> = ({
    children,
    emphasizeClassName = 'text-primary-600',
    ...props
}) => {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div>
                <h2
                    className={classNames(
                        'text-base font-semibold  uppercase tracking-wide',
                        emphasizeClassName
                    )}
                >
                    {props.subtitle}
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900">
                    {props.title}
                </p>
                <p className="mt-4 text-lg text-gray-500">
                    {props.description}
                </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
                <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                    {children}
                </dl>
            </div>
        </div>
    )
}
