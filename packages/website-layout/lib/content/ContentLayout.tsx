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
                    'py-16',
                    'mx-auto grid grid-cols-3 gap-20 max-w-5xl w-full flex-grow'
                )}
            >
                <div className="col-span-2">{props.children}</div>
                <div className="col-span-1">{props.right}</div>
            </div>
            <div className="w-full">
                {props.footer}
                <Footer />
            </div>
        </main>
    )
}
