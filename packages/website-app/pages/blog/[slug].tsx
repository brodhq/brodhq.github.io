import { getPostBySlug, getAllPosts, Release } from '@geislabs/website-content'
import { BlogPost, Detail } from '@geislabs/website-blog'
import React from 'react'
import { ContentSidebar, ContentHeader } from 'layouts/common'
import { useSubscribe } from 'hooks'
import { Twitter } from '../../constants/index'
import { Meta } from 'components/Meta'
import { useProject } from 'hooks/config'
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
    const { title, description } = useDetail('blog', post)
    const subscribe = useSubscribe()
    return (
        <Detail.Layout
            post={post}
            header={<ContentHeader />}
            right={
                <ContentSidebar>
                    <Detail.ShareMenu
                        post={post}
                        twitterHandle={Twitter.getTwitterHandle()}
                    />
                </ContentSidebar>
            }
            subscribe={<Detail.Subscribe onSubmit={subscribe.onSubmit} />}
        >
            <Meta title={title} description={description} />
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
