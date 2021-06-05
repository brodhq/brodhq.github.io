import { getContentBySlug, Release } from '@geislabs/website-content'
import { Sidebar } from '@geislabs/website-layout'
import { ColumnLayout } from '@layouts'
import React from 'react'

export interface BlogProps {
    title: string
    description: string
    content: string
    releases: Release[]
}

const Install: React.FC<BlogProps> = (props) => {
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

export default Install

export async function getStaticProps() {
    return {
        props: await getContentBySlug('install'),
    }
}
