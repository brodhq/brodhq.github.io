import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

export interface FeatureItemProps {
    className?: string
    name: string
    description: string
}

export const FeatureItem: React.FC<FeatureItemProps> = (props) => {
    return (
        <div className={classNames('relative', props.className)}>
            <dt>
                <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                    {props.name}
                </p>
            </dt>
            <dd className="mt-2 ml-9 text-base text-gray-500">
                {props.description}
            </dd>
        </div>
    )
}
