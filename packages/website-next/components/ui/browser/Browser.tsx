import React from 'react'

export interface BrowserProps {
    className?: string
}

export const Browser: React.FC<BrowserProps> = ({ children, className }) => {
    return (
        <div className={className}>
            <div className="h-10 bg-gray-200 flex items-center pl-4 space-x-2">
                <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                <div className="h-3 w-3 rounded-full bg-gray-300"></div>
            </div>
            <div>{children}</div>
        </div>
    )
}
