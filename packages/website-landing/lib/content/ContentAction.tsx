import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

export interface ContentActionProps {
    className?: string
}

export const ContentAction: React.FC<ContentActionProps> = (props) => {
    return (
        <div className="mt-8 inline-flex rounded-md shadow">
            <a
                href="#"
                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
                {props.children}
            </a>
        </div>
    )
}
