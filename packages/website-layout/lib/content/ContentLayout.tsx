import classNames from 'classnames'
import React from 'react'
import { Header } from '../header'
import { Footer } from '../footer'

export interface ContentLayoutProps {
    className?: string
    brandClassName?: string
    navItemClassName?: string
    header?: React.ReactNode
    footer?: React.ReactNode
    right: React.ReactNode
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({
    className = '',
    brandClassName = '',
    header = (
        <Header
            className="h-45 py-5 mx-auto max-w-7xl"
            brandClassName="pt-20 pb-10 text-primary-400"
            itemClassName="text-gray-500 hover:text-gray-600"
            activeItemClassName="text-primary-600 hover:text-primary-600"
        />
    ),
    ...props
}) => {
    return (
        <main className="flex flex-col min-h-screen items-start">
            <div className="w-full mx-auto flex-shrink-0">{header}</div>
            <div
                className={classNames(
                    'px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-16',
                    'max-auto w-full grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-8'
                    // 'mx-auto grid grid-cols-3 gap-20 max-w-5xl w-full flex-grow'
                )}
            >
                <div className="col-span-2 order-2 md:order-1">
                    {props.children}
                </div>
                <aside className="col-span-1 order-1 md:order-2 relative">
                    <div className="pt-4 md:pt-8 sticky top-0">
                        {props.right}
                    </div>
                </aside>
            </div>
            <div className="w-full">
                {props.footer}
                <Footer />
            </div>
        </main>
    )
}
