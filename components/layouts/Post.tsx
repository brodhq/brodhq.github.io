import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { DefaultLayout } from './Default'

export interface PostLayoutProps {
    title?: string
    description?: string
    content: string
}

export const PostLayout: React.FC<PostLayoutProps> = (props) => {
    return (
        <DefaultLayout>
            <Head>
                <title>{props.title}</title>
            </Head>
            <article>
                <h1>{props.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: props.content }} />
                <div>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
            </article>
        </DefaultLayout>
    )
}
