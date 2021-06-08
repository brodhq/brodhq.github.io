import classNames from 'classnames'
import React from 'react'

export interface TableBodyCellProps {
    className?: string
    children: React.ReactNode
}

export const TableBodyCell: React.FC<TableBodyCellProps> = ({
    children,
    className,
}) => {
    return (
        <td
            className={classNames(
                'px-6 py-4 whitespace-nowrap text-sm text-gray-500',
                className
            )}
        >
            {children}
        </td>
    )
}
