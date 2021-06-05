import { Browser, Carousel, Code } from '@geislabs/website-ui'
import {
    Hero,
    Feature,
    Blog,
    CTA,
    Content,
    LogoCloud,
} from '@geislabs/website-landing'
import { Header, Landing } from '@geislabs/website-layout'
import {
    getAllCases,
    getConfig,
    getAllReleases,
    Release,
    Usecase,
    getMostRecentPosts,
    BlogPost,
} from '@geislabs/website-content'
import { outdent } from 'outdent'
import React from 'react'

export interface HomeProps {
    title: string
    description: string
    posts: BlogPost[]
    cases: Usecase[]
    releases: Release[]
}

const Home: React.FC<HomeProps> = ({ cases, releases, ...props }) => {
    return (
        <Landing.Layout
            {...props}
            header={
                <div className="bg-gray-800 h-screen">
                    <Header
                        className="bg-gray-800 max-w-5xl mx-auto"
                        itemClassName="text-white hover:text-gray-300"
                        activeItemClassName="text-gray-300"
                    />
                    <Hero.Container
                        className=""
                        asset={
                            <Carousel.List className="bg-gray-700 rounded-md overflow-hidden">
                                <Carousel.Item>
                                    <Browser title="api">
                                        <Code className="prose" darkmode={true}>
                                            {outdent`
                                    import { fetch } from 'krans'

                                    // Fetch google and parse as JSON
                                    const data = fetch('json://google.com', ({ data }) => ({
                                        title: data['title'].toString(),
                                        description: data['description'].toString(),
                                        summary: data['summary'].toString(),
                                        createdAt: data['created_at'].toDate()
                                    }))

                                    assert data === [{ title: 'jack' }, ...]
                                `}
                                        </Code>
                                    </Browser>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Browser title="watch">
                                        <Code className="prose" darkmode={true}>
                                            {outdent`
                                    import { fetch, watch, key, interval } from 'krans'

                                    // Watch changes to API call
                                    const changes = watch(
                                        fetch(Json, 'https://google.com', ({ data }) => ({
                                            title: data['title'].toString(),
                                            description: data['description'].toString(),
                                            summary: data['summary'].toString(),
                                            createdAt: data['created_at'].toDate()
                                        })), 
                                        key('title'), 
                                        interval(5000),
                                        ({ data }) => console.log('I changed!', data)
                                    )
                                    `}
                                        </Code>
                                    </Browser>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Browser title="browse">
                                        <Code className="prose" darkmode={true}>
                                            {outdent`
                                    import { browse, wait, click } from 'krans'
                                    
                                    // Visit website with browser
                                    const data = browse(
                                        'json://google.com', 
                                        wait('network'),
                                        click('#details'),
                                        ({ data }) => ({
                                            title: data['table > tr.title'].toString(),
                                            description: data['p.description'].toString(),
                                            summary: data[
                                                'table > p:first-child.summary'
                                            ].toString(),
                                        })
                                    )
                                    
                                    assert data === [{ title: 'jack' }, ...]
                                    `}
                                        </Code>
                                    </Browser>
                                </Carousel.Item>
                            </Carousel.List>
                        }
                    >
                        <Hero.Content
                            title={
                                <>
                                    <span className="md:block">
                                        Data to enrich your
                                    </span>{' '}
                                    <span className="text-primary-400 md:block">
                                        online business
                                    </span>
                                </>
                            }
                        >
                            Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui lorem cupidatat commodo. Elit sunt
                            amet fugiat veniam occaecat fugiat aliqua ad ad non
                            deserunt sunt.
                        </Hero.Content>
                    </Hero.Container>
                </div>
            }
        >
            <div>
                <div className="bg-gray-50">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <LogoCloud.List>
                            <LogoCloud.Item src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" />
                            <LogoCloud.Item src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" />
                            <LogoCloud.Item src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" />
                            <LogoCloud.Item src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" />
                            <LogoCloud.Item src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" />
                        </LogoCloud.List>
                    </div>
                </div>
            </div>
            <div>
                <Content.Container asset={<Content.Asset />}>
                    <Content.Main
                        subtitle="Transactions"
                        title="What makes us different"
                        action={<Content.Action>Learn More</Content.Action>}
                    >
                        Sagittis scelerisque nulla cursus in enim consectetur
                        quam. Dictum urna sed consectetur neque tristique
                        pellentesque. Blandit amet, sed aenean erat arcu morbi.
                        Cursus faucibus nunc nisl netus morbi vel porttitor
                        vitae ut. Amet vitae fames senectus vitae.
                    </Content.Main>
                </Content.Container>
            </div>
            <div className="bg-white">
                <Feature.List>
                    <Feature.Item
                        name="Invite team members"
                        description="You can manage phone, email and chat conversations all from a single mailbox."
                    />
                    <Feature.Item
                        name="List view"
                        description="You can manage phone, email and chat conversations all from a single mailbox."
                    />
                    <Feature.Item
                        name="Keyboard shortcuts"
                        description="You can manage phone, email and chat conversations all from a single mailbox."
                    />
                    <Feature.Item
                        name="Notifications"
                        description="Find what you need with advanced filters, bulk actions, and quick views."
                    />
                    <Feature.Item
                        name="Calendars"
                        description="You can manage phone, email and chat conversations all from a single mailbox."
                    />
                    <Feature.Item
                        name="Boards"
                        description="Find what you need with advanced filters, bulk actions, and quick views."
                    />
                    <Feature.Item
                        name="Reporting"
                        description="Find what you need with advanced filters, bulk actions, and quick views."
                    />
                    <Feature.Item
                        name="Mobile app"
                        description="Find what you need with advanced filters, bulk actions, and quick views."
                    />
                </Feature.List>
            </div>
            <div className="bg-gray-50">
                <CTA.Container>
                    <CTA.Action
                        title={
                            <>
                                <span className="block">Ready to dive in?</span>
                                <span className="block">
                                    Start your free trial today.
                                </span>
                            </>
                        }
                    >
                        <CTA.Button>Get started</CTA.Button>
                        <CTA.Button variant="secondary">Learn more</CTA.Button>
                    </CTA.Action>
                </CTA.Container>
            </div>
            <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <Blog.List header={<Blog.Subscribe />}>
                    {props.posts.map((post) => (
                        <Blog.Item key={post.title} post={post} />
                    ))}
                </Blog.List>
            </div>
        </Landing.Layout>
    )
}

export async function getStaticProps() {
    const config = await getConfig()
    const cases = await getAllCases()
    const releases = await getAllReleases()
    const recentPosts = await getMostRecentPosts(4)
    return {
        props: {
            cases: cases.slice(0, 3),
            releases: releases,
            title: config.title,
            description: config.description,
            posts: recentPosts,
        },
    }
}

export default Home
