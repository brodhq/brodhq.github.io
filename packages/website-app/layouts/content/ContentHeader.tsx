import React, { ReactNode } from 'react'
import * as Common from '../common'

export interface ContentLayoutHeaderProps {
    className?: string
}

export const ContentLayoutHeader: React.FC<ContentLayoutHeaderProps> = ({
    className = '',
    ...props
}) => {
    return (
        <Common.Header
            className={className}
            brandClassName="text-primary-500"
            itemClassName="text-gray-700 hover:text-gray-800"
        />
    )
}
