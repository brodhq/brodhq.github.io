import {
    getAllPosts,
    getAllReleases,
    getConfig,
    Release,
} from '@geislabs/website-content'
import { Sidebar } from '@geislabs/website-layout'
import { Blog } from '@geislabs/website-ui'
import { Content } from 'layouts'
import { sortBy } from '@utils'
import { BlogPostListItem } from '@views'
import classNames from 'classnames'
import React from 'react'
import { getBlogLink } from 'navigation'

export interface BlogProps {
    title: string
    description: string
    posts: Blog.BlogPost[]
    releases: Release[]
}

const BlogPage: React.FC<BlogProps> = (props) => {
    return (
        <Content.Layout
            breadcrumbs={['Blog']}
            description={props.description}
            right={<Sidebar releases={props.releases} />}
        >
            <Blog.List>
                {props.posts.map((post) => (
                    <Blog.Item
                        href={getBlogLink(post)}
                        className="pb-8"
                        buttonClassName="text-primary-500"
                        post={post}
                    />
                ))}
            </Blog.List>
            <ul className="space-y-8"></ul>
        </Content.Layout>
    )
}

export async function getStaticProps() {
    const config = await getConfig()
    const allPosts = await getAllPosts()
    const releases = await getAllReleases()
    return {
        props: {
            posts: sortBy(allPosts, 'date', 'desc'),
            title: config.title,
            description: config.description,
            releases,
        },
    }
}

export default BlogPage
