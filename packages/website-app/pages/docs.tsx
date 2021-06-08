import { Link } from '@geislabs/website-ui'
import {
    getConfig,
    Release,
    getAllReleases,
    Section,
    getAPIs,
} from '@geislabs/website-content'
import { Content } from 'layouts'
import React from 'react'
import { GuideMenu } from '../components/views/guides'

export interface DocPageProps {
    title: string
    description: string
    docs: Section[]
    releases: Release[]
}

const DocPage: React.FC<DocPageProps> = ({ docs, ...props }) => {
    return (
        <Content.Layout
            breadcrumbs={['API']}
            right={
                <GuideMenu
                    namespace="docs"
                    sections={docs}
                    releases={props.releases}
                />
            }
        >
            <div className="space-y-5">
                <h2 className="prose prose-2xl">API</h2>
                <p className="prose">
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

export default DocPage

export async function getStaticProps() {
    const config = await getConfig()
    const docs = await getAPIs()
    const releases = await getAllReleases()
    return {
        props: {
            title: config.title,
            description: config.description,
            docs,
            releases,
        },
    }
}
