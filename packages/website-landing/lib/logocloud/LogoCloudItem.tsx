import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

export interface LogoCloudItemProps {
    className?: string
    src: string
}

export const LogoCloudItem: React.FC<LogoCloudItemProps> = (props) => {
    return (
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src={props.src} alt="Tuple" />
        </div>
    )
}
