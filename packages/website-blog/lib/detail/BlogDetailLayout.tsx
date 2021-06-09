import { Content } from '@geislabs/website-layout'
import React, { ReactNode } from 'react'
import Image from 'next/image'
import { BlogPost } from '../blogTypes'
import { formatDate } from '../list/BlogListPage'

export interface BlogListLayoutProps {
    className?: string
    right: ReactNode
    breadcrumbs?: string[]
    description?: string
    post: BlogPost
    header?: React.ReactNode
}

export const BlogDetailLayout: React.FC<BlogListLayoutProps> = ({
    className = '',
    breadcrumbs = [],
    description = '',
    post,
    ...props
}) => {
    const title = ['Krans', ...breadcrumbs].join(' | ')
    return (
        <Content.Layout
            header={
                <div className="">
                    {props.header}
                    <div className="py-20 w-full min-h-20 bg-blue-50 text-gray-800 flex justify-center">
                        <div className="mx-auto">
                            <div className="space-y-10 flex flex-col justify-center items-center">
                                <div className="flex shadow-lg border-4 border-white rounded-lg">
                                    <Image
                                        className="rounded-lg"
                                        src={post.image}
                                        alt={post.title}
                                        layout="fixed"
                                        objectFit="cover"
                                        quality={75}
                                        width={350}
                                        height={250}
                                    />
                                </div>
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
                                        <span className="">{post.author}</span>{' '}
                                        · <span>{formatDate(post.date)}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            title={title}
            description={description}
            right={props.right}
        >
            {props.children}
        </Content.Layout>
    )
}
