import { getAllPosts, getAllReleases, getConfig, BlogPost, Release } from '@api'
import { ColumnLayout } from '@layouts'
import { sortBy } from '@utils'
import { BlogPostListItem } from '@views'
import classNames from 'classnames'
import { Sidebar } from 'components/sections'
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
            // @ts-expect-error
            title: config.title,
            // @ts-expect-error
            description: config.description,
            releases,
        },
    }
}

export default Blog
