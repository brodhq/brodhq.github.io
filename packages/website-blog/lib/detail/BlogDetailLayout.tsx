import { Content } from '@geislabs/website-layout'
import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { BlogPost } from '../blogTypes'
import { formatDate } from '../list/BlogListPage'

export interface BlogListLayoutProps {
    className?: string
    emphasizeTextClassName?: string
    emphasizeButtonClassName?: string
    right: ReactNode
    breadcrumbs?: string[]
    description?: string
    post: BlogPost
    header?: React.ReactNode
    subscribe?: React.ReactNode
}

export const BlogDetailLayout: React.FC<BlogListLayoutProps> = ({
    className = '',
    breadcrumbs = [],
    description = '',
    post,
    emphasizeTextClassName = 'text-red-400',
    emphasizeButtonClassName = 'text-white bg-red-400 hover:bg-red-500 focus:ring-red-400',
    ...props
}) => {
    const title = ['Krans', ...breadcrumbs].join(' | ')
    const image = require(`../../public/${post.image}?resize`)
    return (
        <Content.Layout
            header={
                <div className="">
                    {props.header}
                    <div className="py-20 w-full min-h-20 bg-blue-50 text-gray-800 flex justify-center">
                        <div className="mx-auto">
                            <div className="space-y-10 flex flex-col justify-center items-center">
                                <div className="flex shadow-lg border-4 border-white rounded-lg">
                                    <img
                                        style={{ objectFit: 'cover' }}
                                        className="rounded-lg"
                                        srcSet={image.srcSet}
                                        src={image.src}
                                        alt={post.title}
                                        width={350}
                                        height={250}
                                    />
                                    {/* <Image
                                        className="rounded-lg"
                                        src={post.image}
                                        alt={post.title}
                                        layout="fixed"
                                        objectFit="cover"
                                        quality={75}
                                        width={350}
                                        height={250}
                                    /> */}
                                </div>
                                <div className="space-y-4 flex flex-col justify-center items-center">
                                    <a
                                        className={classNames(
                                            'text-sm tracking-tight  uppercase font-semibold',
                                            emphasizeTextClassName
                                        )}
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
            footer={
                <div className="bg-gray-800">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
                        <div className="lg:w-0 lg:flex-1">
                            <h2
                                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                                id="newsletter-headline"
                            >
                                Sign up for our newsletter
                            </h2>
                            <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
                                Anim aute id magna aliqua ad ad non deserunt
                                sunt. Qui irure qui Lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat fugiat.
                            </p>
                        </div>
                        {props.subscribe}
                    </div>
                </div>
            }
        >
            {props.children}
        </Content.Layout>
    )
}
