import {
    getAllReleases,
    getAPIs,
    getAPI,
    Guide,
    Release,
    Section,
} from '@geislabs/website-content'
import { Content } from '@geislabs/website-layout'
import { titleize } from '@utils'
import { GuideMenu } from '@views'
import React from 'react'

export interface APIProps {
    api: Guide
    sections: Section[]
    releases: Release[]
}

const APIPage: React.FC<APIProps> = (props) => {
    console.log(props.sections, props.releases)
    return (
        <Content.Layout
            className="space-y-3"
            title={`Krans | API | ${props.api.title}`}
            description=""
            right={
                <GuideMenu
                    namespace="reference"
                    sections={props.sections}
                    releases={props.releases}
                />
            }
        >
            <h2 className="text-gray-400">{titleize(props.api.section)}</h2>
            <h1 className="prose text-4xl">{props.api.title}</h1>
            <ul className="space-y-2 mt-10">
                {props.api.subsections.map((section, index) => (
                    <li key={index} className="flex">
                        <div className="w-5 text-gray-500">{index + 1}.</div>
                        <a
                            className="text-primary-800 underline"
                            href={`#${section.slug}`}
                        >
                            {section.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div
                className="mt-10 space-y-5"
                dangerouslySetInnerHTML={{ __html: props.api.content }}
            />
        </Content.Layout>
    )
}

export default APIPage

export async function getStaticProps(context): Promise<{ props: APIProps }> {
    console.log('context', context)
    return {
        props: {
            api: await getAPI(context.params.slug),
            sections: await getAPIs(),
            releases: await getAllReleases(),
        },
    }
}

export async function getStaticPaths() {
    const sections = await getAPIs()
    console.log('sections', sections)
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
