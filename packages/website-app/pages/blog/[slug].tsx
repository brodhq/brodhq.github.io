import { getPostBySlug, getAllPosts, Release } from '@geislabs/website-content'
import { BlogPost, Detail } from '@geislabs/website-blog'
import React from 'react'
import { Content } from 'layouts'
import { useSubscribe } from 'hooks'
import { Twitter } from '../../constants/index'
import { ArticleMeta, Meta } from 'components/Meta'
import { useDetail, useIndex } from 'hooks/page'

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
    const pageinfo = useDetail('blog', post)
    const subscribe = useSubscribe()
    return (
        <Detail.Layout
            post={post}
            header={<Content.Header />}
            right={
                <Content.Sidebar>
                    <Detail.ShareMenu
                        post={post}
                        twitterHandle={Twitter.getTwitterHandle()}
                    />
                </Content.Sidebar>
            }
            subscribe={<Detail.Subscribe onSubmit={subscribe.onSubmit} />}
        >
            <ArticleMeta
                {...pageinfo}
                image={require(`../../public/blog/${post.image}`)}
                author={post.author}
            />
            <Detail.Page
                description={post.summary}
                post={post}
                content={content}
            />
        </Detail.Layout>
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
