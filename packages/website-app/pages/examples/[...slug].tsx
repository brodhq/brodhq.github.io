import {
    getAllReleases,
    getGuides,
    getGuide,
    Guide,
    Release,
    Section,
    getExamples,
    getExample,
} from '@geislabs/website-content'
import { Content } from '@geislabs/website-layout'
import { titleize } from '@utils'
import { GuideMenu } from '@views'
import React from 'react'

export interface ExampleProps {
    guide: Guide
    sections: Section[]
    releases: Release[]
}

const ExamplePage: React.FC<ExampleProps> = (props) => {
    return (
        <Content.Layout
            className="space-y-3"
            title={`Krans | Examples | ${props.guide.title}`}
            description=""
            right={
                <GuideMenu
                    namespace="examples"
                    sections={props.sections}
                    releases={props.releases}
                />
            }
        >
            <h2 className="text-gray-400 uppercase">
                {titleize(props.guide.section)}
            </h2>
            <h1 className="prose text-4xl">{props.guide.title}</h1>
            <div
                className="mt-10 space-y-5"
                dangerouslySetInnerHTML={{ __html: props.guide.content }}
            />
        </Content.Layout>
    )
}

export default ExamplePage

export async function getStaticProps(
    context
): Promise<{ props: ExampleProps }> {
    return {
        props: {
            guide: await getExample(context.params.slug),
            sections: await getExamples(),
            releases: await getAllReleases(),
        },
    }
}

export async function getStaticPaths() {
    const sections = await getExamples()
    const paths = sections.flatMap((section) =>
        section.guides.map((guide) => ({
            params: { slug: guide.slug.split('/') },
        }))
    )
    return {
        paths: paths,
        fallback: false,
    }
}
