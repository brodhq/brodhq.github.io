import {
    getAllReleases,
    getAllSections,
    getByGuideSlug,
    Guide,
    Release,
    Section,
} from '@api'
import { titleize } from '@utils'
import { GuideLayout } from '@views'
import React from 'react'

export interface GuideProps {
    guide: Guide
    sections: Section[]
    releases: Release[]
}

const GuidePage: React.FC<GuideProps> = (props) => {
    return (
        <GuideLayout
            className="space-y-3"
            sections={props.sections}
            releases={props.releases}
        >
            <h2 className="text-gray-400">{titleize(props.guide.section)}</h2>
            <h1 className="prose text-4xl">{props.guide.title}</h1>
            <ul className="space-y-2 mt-10">
                {props.guide.subsections.map((section, index) => (
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
                dangerouslySetInnerHTML={{ __html: props.guide.content }}
            />
        </GuideLayout>
    )
}

export default GuidePage

export async function getStaticProps(context): Promise<{ props: GuideProps }> {
    return {
        props: {
            guide: await getByGuideSlug(context.params.slug),
            sections: await getAllSections(),
            releases: await getAllReleases(),
        },
    }
}

export async function getStaticPaths() {
    const sections = await getAllSections()
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
