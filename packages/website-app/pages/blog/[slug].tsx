import {
    getPostBySlug,
    getAllPosts,
    BlogPost,
    Release,
} from '@geislabs/website-content'
import { Sidebar } from '@geislabs/website-layout'
import React from 'react'
import { Blog } from 'layouts'
import { BlogPostMetadata } from '@views'
import { formatDate } from '@utils'

export interface BlogPostPageProps {
    content: string
    post: BlogPost
    releases: Release[]
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
    post,
    releases,
    content,
}) => {
    return (
        <Blog.Layout
            breadcrumbs={['Blog', post.title]}
            header={
                <div className="space-y-10 flex flex-col justify-center items-center">
                    <img
                        className="mb shadow-lg border-2 border-white rounded-lg mx-auto"
                        src="https://via.placeholder.com/350x200"
                        alt=""
                    />
                    <div className="space-y-4 flex flex-col justify-center items-center">
                        <a
                            className="text-sm tracking-tight text-red-400 uppercase font-semibold"
                            href=""
                        >
                            {post.category}
                        </a>
                        <h1 className="text-6xl tracking-tight font-semibold text-gray-900">
                            {post.title}
                        </h1>
                        <p className="text-gray-500 text-xl font-light">
                            <span className="">{post.author}</span> ·{' '}
                            <span>{formatDate(post.date)}</span>
                        </p>
                    </div>
                </div>
            }
            right={<Sidebar releases={releases} />}
        >
            <div className="divide-y-2 divide-gray-200">
                <div className="pb-6">
                    <h2 className="text-2xl">{post.summary}</h2>
                </div>
                <div className="pt-6">
                    <div
                        className="space-y-5"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </div>
        </Blog.Layout>
    )
}

export async function getStaticProps(context) {
    return {
        props: await getPostBySlug(context.params.slug),
    }
}

export async function getStaticPaths() {
    const posts = await getAllPosts()
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))
    return {
        paths: paths,
        fallback: false,
    }
}

export default BlogPostPage
