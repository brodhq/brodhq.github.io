import classNames from 'classnames'
import React from 'react'

export interface TableProps {
    className?: string
    children: React.ReactNode
    headers: React.ReactNode[]
}

export const Table: React.FC<TableProps> = ({
    className,
    headers,
    children,
}) => {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-gray-200 pb-6">
                        <table className="min-w-full divide-y divide-gray-100">
                            <thead className="bg-gray-50 ">{headers}</thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
