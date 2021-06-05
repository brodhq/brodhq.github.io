import React from 'react'

export const LogoCloudList: React.FC = ({ children }) => {
    return (
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            {children}
        </div>
    )
}
