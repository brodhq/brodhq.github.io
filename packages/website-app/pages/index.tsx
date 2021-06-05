import { Browser, Code } from '@geislabs/website-ui'
import { Hero, Feature } from '@geislabs/website-landing'
import {
    getAllCases,
    getConfig,
    getAllReleases,
    Release,
    Usecase,
} from '@geislabs/website-content'
import { outdent } from 'outdent'
import { Header, Footer } from 'components/sections'
import React from 'react'

export interface HomeProps {
    title: string
    description: string
    posts: any[]
    cases: Usecase[]
    releases: Release[]
}

const posts = [
    {
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
    },
    {
        title: 'How to use search engine optimization to drive sales',
        href: '#',
        description:
            'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
    },
    {
        title: 'Improve your customer experience',
        href: '#',
        description:
            'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
    },
    {
        title: 'Writing effective landing page copy',
        href: '#',
        description:
            'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
        date: 'Jan 29, 2020',
        datetime: '2020-01-29',
    },
]

const Home: React.FC<HomeProps> = ({ cases, releases, ...props }) => {
    return (
        <div>
            <div className="bg-gray-800 h-screen">
                <Header className="bg-gray-800 h-20" />
                <Hero className="">
                    <Browser>
                        <Code className="prose">
                            {outdent`
                        import { fetch } from 'geis'

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
                </Hero>
            </div>
            <div>
                <div className="bg-gray-50">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                                    alt="Tuple"
                                />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                                    alt="Mirage"
                                />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                    alt="StaticKit"
                                />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                    alt="Transistor"
                                />
                            </div>
                            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                    alt="Workcation"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative bg-white sm:py-24">
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                        <div className="relative sm:py-16 lg:py-0">
                            <div
                                aria-hidden="true"
                                className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
                            >
                                <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
                                <svg
                                    className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                                    width={404}
                                    height={392}
                                    fill="none"
                                    viewBox="0 0 404 392"
                                >
                                    <defs>
                                        <pattern
                                            id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                            x={0}
                                            y={0}
                                            width={20}
                                            height={20}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <rect
                                                x={0}
                                                y={0}
                                                width={4}
                                                height={4}
                                                className="text-gray-200"
                                                fill="currentColor"
                                            />
                                        </pattern>
                                    </defs>
                                    <rect
                                        width={404}
                                        height={392}
                                        fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                                    />
                                </svg>
                            </div>
                            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                                {/* Testimonial card*/}
                                <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                                    <img
                                        className="absolute inset-0 h-full w-full object-cover"
                                        src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                                        alt=""
                                    />
                                    <div className="absolute inset-0 bg-primary-200 mix-blend-multiply" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-400 via-primary-400 opacity-90" />
                                    <div className="relative px-8">
                                        <div>
                                            <img
                                                className="h-12"
                                                src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                                                alt="Workcation"
                                            />
                                        </div>
                                        <blockquote className="mt-8">
                                            <div className="relative text-lg font-medium text-white md:flex-grow">
                                                <svg
                                                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 32 32"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                                </svg>
                                                <p className="relative">
                                                    Tincidunt integer commodo,
                                                    cursus etiam aliquam neque,
                                                    et. Consectetur pretium in
                                                    volutpat, diam. Montes,
                                                    magna cursus nulla feugiat
                                                    dignissim id lobortis amet.
                                                </p>
                                            </div>

                                            <footer className="mt-4">
                                                <p className="text-base font-semibold text-primary-200">
                                                    Sarah Williams, CEO at
                                                    Workcation
                                                </p>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                            {/* Content area */}
                            <div className="pt-12 sm:pt-16 lg:pt-20">
                                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                                    <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
                                        Transactions
                                    </h2>
                                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                        What makes us different
                                    </p>
                                </div>
                                <div className="mt-6 text-gray-500 space-y-6">
                                    <p className="text-lg">
                                        Sagittis scelerisque nulla cursus in
                                        enim consectetur quam. Dictum urna sed
                                        consectetur neque tristique
                                        pellentesque. Blandit amet, sed aenean
                                        erat arcu morbi. Cursus faucibus nunc
                                        nisl netus morbi vel porttitor vitae ut.
                                        Amet vitae fames senectus vitae.
                                    </p>
                                </div>
                                <div className="mt-8 inline-flex rounded-md shadow">
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                                    >
                                        Contact sales
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <Feature />
            </div>
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block">
                            Start your free trial today.
                        </span>
                    </h2>
                    <div className="mt-8 flex justify-center">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                            >
                                Get started
                            </a>
                        </div>
                        <div className="ml-3 inline-flex">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                            Press
                        </h2>
                        <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                            <p className="text-xl text-gray-500">
                                Get weekly articles in your inbox on how to grow
                                your business.
                            </p>
                            <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                                <div>
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email-address"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 lg:max-w-xs"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                                    <button
                                        type="button"
                                        className="w-full bg-primary-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:w-auto sm:inline-flex"
                                    >
                                        Notify me
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                        {posts.map((post) => (
                            <div key={post.title}>
                                <p className="text-sm text-gray-500">
                                    <time dateTime={post.datetime}>
                                        {post.date}
                                    </time>
                                </p>
                                <a href="#" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">
                                        {post.title}
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                        {post.description}
                                    </p>
                                </a>
                                <div className="mt-3">
                                    <a
                                        href={post.href}
                                        className="text-base font-semibold text-primary-600 hover:text-primary-500"
                                    >
                                        Read full story
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const config = await getConfig()
    const cases = await getAllCases()
    const releases = await getAllReleases()
    return {
        props: {
            cases: cases.slice(0, 3),
            releases: releases,
            title: config.title,
            description: config.description,
        },
    }
}

export default Home
