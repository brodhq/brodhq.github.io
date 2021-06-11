import { Landing } from '@geislabs/website-layout'
import React, { ReactNode } from 'react'
import * as Common from '../common'

export interface LandingLayoutViewProps {
    className?: string
    hero: ReactNode
}

export const LandingLayoutView: React.FC<LandingLayoutViewProps> = ({
    className = '',
    hero,
    ...props
}) => {
    return (
        <Landing.Layout
            header={
                <div className="min-h-screen">
                    <Common.Header
                        toggleClassName="bg-gray-700"
                        brandClassName="text-gray-400"
                        brandPopoverClassName="text-primary-400"
                        itemClassName="text-gray-300 hover:text-gray-400"
                    />
                    {hero}
                </div>
            }
            footer={<Common.Footer />}
        >
            {props.children}
        </Landing.Layout>
    )
}
