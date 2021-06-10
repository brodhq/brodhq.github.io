import {
    getAllReleases,
    getGuides,
    getGuide,
    Guide,
    Release,
    Section,
} from '@geislabs/website-content'
import { Content } from 'layouts'
import { titleize } from '@utils'
import { GuideMenu } from '@views'
import React from 'react'
import { useDetail } from 'hooks/page'
import { Meta } from 'components/Meta'
import { Button } from '@geislabs/website-ui'
import { getHref } from 'hooks/routes'

export interface GuideProps {
    guide: Guide
    sections: Section[]
    releases: Release[]
}

const GuidePage: React.FC<GuideProps> = (props) => {
    const pageinfo = useDetail('guides', props.guide)
    return (
        <Content.Layout
            className="space-y-3"
            right={
                <GuideMenu
                    sections={props.sections}
                    releases={props.releases}
                />
            }
        >
            <Meta {...pageinfo} />
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
            <div className="space-x-4">
                {props.guide.previous && (
                    <Button.Primary
                        minimal={true}
                        href={getHref('guide', props.guide.previous)}
                    >
                        Previous: {props.guide.previous.title}
                    </Button.Primary>
                )}
                {props.guide.next && (
                    <Button.Primary
                        minimal={true}
                        href={getHref('guide', props.guide.next)}
                    >
                        Next: {props.guide.next.title}
                    </Button.Primary>
                )}
            </div>
        </Content.Layout>
    )
}

export default GuidePage

export async function getStaticProps(context): Promise<{ props: GuideProps }> {
    return {
        props: {
            guide: await getGuide(context.params.slug),
            sections: await getGuides(),
            releases: await getAllReleases(),
        },
    }
}

export async function getStaticPaths() {
    const sections = await getGuides()
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
