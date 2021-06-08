import classNames from 'classnames'
import React from 'react'

export interface TableRowProps {
    className?: string
    children: React.ReactNode
}

export const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
    return <tr className={classNames('', className)}>{children}</tr>
}
