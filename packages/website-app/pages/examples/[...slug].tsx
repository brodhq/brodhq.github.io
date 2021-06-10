import {
    getAllReleases,
    Guide,
    Release,
    Section,
    getExamples,
    getExample,
} from '@geislabs/website-content'
import { Content } from 'layouts'
import { titleize } from '@utils'
import { GuideMenu } from '@views'
import React from 'react'
import { useDetail } from 'hooks/page'
import { Meta } from 'components/Meta'
import { Button } from '@geislabs/website-ui'
import { getHref } from 'hooks/routes'

export interface ExampleProps {
    guide: Guide
    sections: Section[]
    releases: Release[]
}

const ExamplePage: React.FC<ExampleProps> = (props) => {
    const pageinfo = useDetail('examples', props.guide)
    return (
        <Content.Layout
            className="space-y-3"
            right={
                <GuideMenu
                    namespace="examples"
                    sections={props.sections}
                    releases={props.releases}
                />
            }
        >
            <Meta {...pageinfo} />
            <h2 className="text-gray-400">{titleize(props.guide.section)}</h2>
            <h1 className="prose text-4xl">{props.guide.title}</h1>
            <div
                className="mt-10 space-y-5"
                dangerouslySetInnerHTML={{ __html: props.guide.content }}
            />
            <hr />
            <div className="space-x-4">
                {props.guide.previous && (
                    <Button.Primary
                        minimal={true}
                        href={getHref('example', props.guide.previous)}
                    >
                        Previous: {props.guide.previous.title}
                    </Button.Primary>
                )}
                {props.guide.next && (
                    <Button.Primary
                        minimal={true}
                        href={getHref('example', props.guide.next)}
                    >
                        Next: {props.guide.next.title}
                    </Button.Primary>
                )}
            </div>
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
