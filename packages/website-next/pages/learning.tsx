import { getContentBySlug, Release } from '@api'
import { ColumnLayout } from '@layouts'
import { Sidebar } from 'components/sections'
import React from 'react'

export interface LearningProps {
    title: string
    description: string
    content: string
    releases: Release[]
}

const Learning: React.FC<LearningProps> = (props) => {
    return (
        <ColumnLayout
            className="space-y-3"
            title={props.title}
            description={props.description}
            right={<Sidebar releases={props.releases} />}
        >
            <div
                className="space-y-5"
                dangerouslySetInnerHTML={{ __html: props.content }}
            />
        </ColumnLayout>
    )
}

export default Learning

export async function getStaticProps() {
    return {
        props: await getContentBySlug('learning'),
    }
}
