import React from 'react'
import { CommonLayoutHeader } from './CommonHeader'

export interface CommonContentHeaderProps {
    className?: string
}

export const CommonContentHeader: React.FC<CommonContentHeaderProps> = ({
    className = '',
}) => {
    return (
        <CommonLayoutHeader
            className={className}
            brandClassName="text-primary-500"
            itemClassName="text-gray-700 hover:text-gray-800"
        />
    )
}
