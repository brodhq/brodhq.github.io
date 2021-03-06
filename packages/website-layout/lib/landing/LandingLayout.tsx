import classNames from 'classnames'
import React from 'react'
import { Header } from '../header'
import { Footer } from '../footer'

export interface LandingLayoutProps {
    className?: string
    brandClassName?: string
    itemClassName?: string
    header?: React.ReactNode
    footer?: React.ReactNode
}

export const LandingLayout: React.FC<LandingLayoutProps> = ({
    className = '',
    brandClassName = '',
    itemClassName = 'text-white hover:text-gray-300',
    header = (
        <Header
            className="h-45 py-5 "
            brandClassName="pt-20 pb-10"
            itemClassName={classNames(itemClassName)}
        />
    ),
    footer = <Footer />,
    ...props
}) => {
    return (
        <main>
            <div className="bg-gray-800">
                <div className="mx-auto">{header}</div>
            </div>
            <div>{props.children}</div>
            <div>{footer}</div>
        </main>
    )
}
