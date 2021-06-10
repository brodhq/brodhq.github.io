import { Landing } from '@geislabs/website-layout'
import { useProject } from 'hooks/config'
import React, { ReactNode } from 'react'
import { Header } from '../common'

export interface LandingLayoutViewProps {
    className?: string
    hero: ReactNode
    title: string
    description: string
}

export const LandingLayoutView: React.FC<LandingLayoutViewProps> = ({
    className = '',
    description,
    hero,
    ...props
}) => {
    return (
        <Landing.Layout
            header={
                <div className="h-screen">
                    <Header
                        brandClassName="text-gray-400"
                        itemClassName="text-gray-300 hover:text-gray-400"
                    />
                    {hero}
                </div>
            }
            title={props.title}
            description={description}
        >
            {props.children}
        </Landing.Layout>
    )
}
