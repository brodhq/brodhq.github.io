import {
    getPostBySlug,
    getAllPosts,
    BlogPost,
    Release,
} from '@geislabs/website-content'
import { Content, Sidebar } from '@geislabs/website-layout'
import React from 'react'
import { BlogPostMetadata } from '@views'

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
        <Content.Layout
            title={`Krans | Blog | ${post.title}`}
            description=""
            right={<Sidebar releases={releases} />}
        >
            <div className="space-y-3">
                <div className="space-y-3">
                    <h1 className="prose prose-2xl text-5xl">{post.title}</h1>
                    <BlogPostMetadata post={post} />
                </div>
                <div
                    className="space-y-5"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </Content.Layout>
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
