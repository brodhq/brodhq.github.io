import {
    getAllPosts,
    getAllReleases,
    getConfig,
    BlogPost,
    Release,
} from '@geislabs/website-content'
import { Sidebar } from '@geislabs/website-layout'
import { ColumnLayout } from '@layouts'
import { sortBy } from '@utils'
import { BlogPostListItem } from '@views'
import classNames from 'classnames'
import React from 'react'

export interface BlogProps {
    title: string
    description: string
    posts: BlogPost[]
    releases: Release[]
}

const Blog: React.FC<BlogProps> = (props) => {
    const sorted = sortBy(props.posts, 'date', 'desc')
    return (
        <ColumnLayout
            title={props.title}
            description={props.description}
            right={<Sidebar releases={props.releases} />}
        >
            <ul className="space-y-8">
                {sorted.map(function (post, idx) {
                    return (
                        <li
                            key={idx}
                            className={classNames('pb-8', {
                                'border-b-2': idx !== sorted.length - 1,
                            })}
                        >
                            <BlogPostListItem post={post} />
                        </li>
                    )
                })}
            </ul>
        </ColumnLayout>
    )
}

export async function getStaticProps() {
    const config = await getConfig()
    const allPosts = await getAllPosts()
    const releases = await getAllReleases()
    return {
        props: {
            posts: allPosts,
            title: config.title,
            description: config.description,
            releases,
        },
    }
}

export default Blog
