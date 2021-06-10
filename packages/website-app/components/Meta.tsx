import { useWebsite } from 'hooks/website'
import NextHead from 'next/head'
import React from 'react'
import fill from '../public/icon-brand-gradient-fill.png'

export interface Social {
    title: string
    description: string
}

export interface MetaProps {
    title: string
    description: string
    social?: Social
    image?: string
}

export const Meta: React.FC<MetaProps> = ({ ...props }) => {
    const { baseUrl } = useWebsite()
    function resolveUrl(relative: string) {
        return [baseUrl.replace(/\/$/, ''), relative].join('')
    }
    return (
        <NextHead>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />(
            <meta property="og:url" content={baseUrl} />
            <meta property="og:site_name" content={baseUrl} />
            <meta property="og:image" content={resolveUrl(fill)} key="image" />
            <meta
                property="og:title"
                content={props.social?.title || props.title}
            />
            <meta
                property="og:description"
                content={props.social?.description || props.description}
            />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta property="twitter:title" content={props.title}></meta>
            <meta name="twitter:card" content="summary" />
            {props.children}
        </NextHead>
    )
}

export interface ArticleMetaProps extends MetaProps {
    image: string
    author?: string
}

export const ArticleMeta: React.FC<ArticleMetaProps> = ({ ...props }) => {
    const { baseUrl } = useWebsite()
    function resolveUrl(relative: string) {
        return [baseUrl.replace(/\/$/, ''), relative].join('')
    }
    return (
        <Meta {...props}>
            <meta property="og:type" content="article" />
            <meta
                property="og:image"
                content={resolveUrl(props.image)}
                key="image"
            />
            {props.author && (
                <meta property="article:author" content={props.author} />
            )}
        </Meta>
    )
}
