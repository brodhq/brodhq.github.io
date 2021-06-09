import {
    getAllPosts,
    getAllReleases,
    getConfig,
} from '@geislabs/website-content'
import { ListLayoutPage, ListPage, ListPageProps } from '@geislabs/website-blog'
import { sortBy } from '@utils'
import React from 'react'
import { getBlogLink } from 'navigation'
import { Header } from 'layouts/common'
import { Sidebar } from '@geislabs/website-layout'

export interface BlogProps
    extends Pick<ListPageProps, 'posts' | 'releases' | 'description'> {
    title: string
}

const BlogPage: React.FC<BlogProps> = (props) => {
    return (
        <ListLayoutPage
            header={
                <Header
                    className=""
                    brandClassName="text-primary-400"
                    itemClassName="text-gray-500 hover:text-gray-600"
                />
            }
            right={<Sidebar releases={props.releases} />}
        >
            <ListPage
                releases={props.releases}
                description={props.description}
                posts={props.posts}
                getBlogLink={getBlogLink}
            />
        </ListLayoutPage>
    )
}

export async function getStaticProps(): Promise<{ props: BlogProps }> {
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
