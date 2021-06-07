import { NavLink, NavLinkProps } from '@geislabs/website-ui'
import Head from 'next/head'
import classNames from 'classnames'
import React from 'react'
import { Header } from '../header'
import { Footer } from '../footer'

export interface ContentLayoutProps {
    className?: string
    brandClassName?: string
    navItemClassName?: string
    title: string
    description: string
    right: React.ReactNode
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({
    className = '',
    brandClassName = '',
    ...props
}) => {
    return (
        <main className="flex flex-col min-h-screen items-start">
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
            </Head>
            <div className="w-full mx-auto flex-shrink-0">
                <Header
                    className="h-45 py-5 mx-auto max-w-7xl"
                    brandClassName="pt-20 pb-10 text-primary-400"
                    itemClassName="text-gray-500 hover:text-gray-600"
                    activeItemClassName="text-primary-600 hover:text-primary-600"
                />
            </div>
            <div
                className={classNames(
                    'pt-6 pb-12',
                    'mx-auto grid grid-cols-3 gap-20 max-w-5xl w-full flex-grow'
                )}
            >
                <div className="col-span-2">{props.children}</div>
                <div className="col-span-1">{props.right}</div>
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </main>
    )
}
