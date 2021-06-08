import classNames from 'classnames'
import React from 'react'

export interface TableHeadCellProps {
    className?: string
    children: React.ReactNode
}

export const TableHeadCell: React.FC<TableHeadCellProps> = ({
    children,
    className,
}) => {
    return (
        <th
            className={classNames(
                'px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider',
                className
            )}
        >
            {children}
        </th>
    )
}
