import { getContentBySlug, Release } from '@geislabs/website-content'
import { Content, Sidebar } from '@geislabs/website-layout'
import React from 'react'

export interface LearningProps {
    title: string
    description: string
    content: string
    releases: Release[]
}

const Learning: React.FC<LearningProps> = (props) => {
    return (
        <Content.Layout
            className="space-y-3"
            title={props.title}
            description={props.description}
            right={<Sidebar releases={props.releases} />}
        >
            <div
                className="space-y-5"
                dangerouslySetInnerHTML={{ __html: props.content }}
            />
        </Content.Layout>
    )
}

export default Learning

export async function getStaticProps() {
    return {
        props: await getContentBySlug('learning'),
    }
}
