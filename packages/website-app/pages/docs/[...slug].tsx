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

export interface DocsPageProps {
    api: Guide
    sections: Section[]
    releases: Release[]
}

const DocsPage: React.FC<DocsPageProps> = (props) => {
    return (
        <Content.Layout
            className="space-y-3"
            title={`Krans | Docs | ${props.api.title}`}
            description=""
            right={
                <GuideMenu
                    namespace="docs"
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

export default DocsPage

export async function getStaticProps(
    context
): Promise<{ props: DocsPageProps }> {
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
