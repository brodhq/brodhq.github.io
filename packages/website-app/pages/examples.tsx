import { Link, NavLink } from '@geislabs/website-ui'
import {
    getExamples,
    getConfig,
    Release,
    getAllReleases,
    Section,
} from '@geislabs/website-content'
import { Content } from '@geislabs/website-layout'
import React from 'react'
import { GuideMenu } from '../components/views/guides'

export interface ExamplePageProps {
    title: string
    description: string
    examples: Section[]
    releases: Release[]
}

const ExamplePage: React.FC<ExamplePageProps> = ({ examples, ...props }) => {
    return (
        <Content.Layout
            title="Krans | Examples"
            description={props.description}
            right={
                <GuideMenu
                    namespace="examples"
                    sections={examples}
                    releases={props.releases}
                />
            }
        >
            <div className="space-y-5">
                <h2 className="prose prose-2xl">Examples</h2>
                <p className="prose pb-5">
                    Click on the cases below to learn more about how companies
                    across different industries are using the power of Geis and
                    its ecosystem to create and grow their businesses. Examples
                    are listed in the order they have been published.
                </p>
                <p className="prose">
                    Want to see more companies? Check out the{' '}
                    <Link href="/">Geis Companies website</Link>, which is
                    maintained by the community.
                </p>
            </div>
        </Content.Layout>
    )
}

export default ExamplePage

export async function getStaticProps() {
    const config = await getConfig()
    const examples = await getExamples()
    const releases = await getAllReleases()
    return {
        props: {
            title: config.title,
            description: config.description,
            examples,
            releases,
        },
    }
}
