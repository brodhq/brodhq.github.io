import { Link } from '@geislabs/website-ui'
import {
    getAllCases,
    getAllReleases,
    getConfig,
    Release,
    Usecase,
} from '@geislabs/website-content'
import { Content, Sidebar } from '@geislabs/website-layout'
import { UseCaseListItem, UseCaseList } from '@app'
import React from 'react'

export interface BlogProps {
    title: string
    description: string
    cases: Usecase[]
    releases: Release[]
}

const Cases: React.FC<BlogProps> = ({ cases, ...props }) => {
    return (
        <Content.Layout
            title="Krans | Use-cases"
            description={props.description}
            right={<Sidebar releases={props.releases} />}
        >
            <div className="space-y-5">
                <h2 className="prose prose-2xl">Cases</h2>
                <p className="prose pb-5">
                    Click on the cases below to learn more about how companies
                    across different industries are using the power of Geis and
                    its ecosystem to create and grow their businesses. Cases are
                    listed in the order they have been published.
                </p>
                <UseCaseList className="gap-5 gap-y-10 pb-5">
                    {cases.map((usecase) => (
                        <UseCaseListItem
                            key={usecase.title}
                            usecase={usecase}
                        />
                    ))}
                </UseCaseList>
                <p className="prose">
                    Want to see more companies? Check out the{' '}
                    <Link href="/">Geis Companies website</Link>, which is
                    maintained by the community.
                </p>
            </div>
        </Content.Layout>
    )
}

export default Cases

export async function getStaticProps() {
    const config = await getConfig()
    const cases = await getAllCases()
    const releases = await getAllReleases()
    return {
        props: {
            cases: cases,
            title: config.title,
            description: config.description,
            releases,
        },
    }
}
