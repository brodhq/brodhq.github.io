import Head from 'next/head'
import { Header, Footer } from 'components/sections'
import React from 'react'

export interface DefaultLayoutProps {
    title?: string
    description?: string
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
    return (
        <main className="pb-32">
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
            </Head>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto flex flex-col">
                    <Header
                        className="h-45 py-5"
                        brandClassName="pt-20 pb-10"
                    />
                    <div className="mb-auto ">{props.children}</div>
                    {/* <Footer className="h-10 pt-10" /> */}
                </div>
            </div>
        </main>
    )
}
