import React from 'react'

export interface FooterProps {
    className?: string
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
    return (
        <footer className={className}>
            <p>©2021 | Footer</p>
        </footer>
    )
}
