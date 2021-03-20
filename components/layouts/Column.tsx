import React from 'react'
import classNames from 'classnames'
import { DefaultLayout } from './Default'

export interface ColumnLayoutProps {
    title?: string
    description?: string
    className?: string
    right: React.ReactNode
}

export const ColumnLayout: React.FC<ColumnLayoutProps> = ({
    children,
    right,
    className,
    ...props
}) => {
    return (
        <DefaultLayout>
            <div className={classNames('grid grid-cols-3 gap-20')}>
                <div className="col-span-2">{children}</div>
                <div className="col-span-1">{right}</div>
            </div>
        </DefaultLayout>
    )
}
