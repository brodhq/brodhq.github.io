import classNames from 'classnames'
import React from 'react'

export interface FooterProps {
    className?: string
    icons?: React.ReactElement[]
    copyright?: React.ReactElement
}

export const Footer: React.FC<FooterProps> = ({ className = '', ...props }) => {
    return (
        <footer className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav
                    className="-mx-5 -my-2 flex flex-wrap justify-center"
                    aria-label="Footer"
                >
                    {props.children}
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    {props.icons &&
                        React.Children.map(props.icons, (child) =>
                            React.cloneElement(child, {
                                ...child.props,
                                className: classNames(
                                    'text-gray-400 hover:text-gray-500',
                                    child.props.className
                                ),
                            })
                        )}
                </div>
                {props.copyright}
            </div>
        </footer>
    )
}
