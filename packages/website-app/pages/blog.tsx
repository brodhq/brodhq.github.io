import {
    getAllPosts,
    getAllReleases,
    getConfig,
} from '@geislabs/website-content'
import { ListLayoutPage, ListPage, ListPageProps } from '@geislabs/website-blog'
import { sortBy } from '@utils'
import React from 'react'
import { getBlogLink } from 'navigation'
import { Content } from 'layouts'
import { useIndex } from 'hooks/page'
import { Meta } from 'components/Meta'

export interface BlogProps
    extends Pick<ListPageProps, 'posts' | 'releases' | 'description'> {
    title: string
}

const BlogPage: React.FC<BlogProps> = (props) => {
    const pageinfo = useIndex('blog')
    return (
        <ListLayoutPage
            header={<Content.Header />}
            right={<Content.Sidebar releases={props.releases} />}
        >
            <Meta {...pageinfo} />
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
