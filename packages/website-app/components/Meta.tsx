import NextHead from 'next/head'
import React from 'react'

export interface MetaProps {
    title: string
    description: string
}

export const Meta: React.FC<MetaProps> = ({ ...props }) => {
    const siteurl = process.browser ? window.location.href : null
    return (
        <NextHead>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            {siteurl ? (
                <>
                    <meta property="og:url" content={siteurl} />
                    <meta property="og:site_name" content={siteurl} />
                </>
            ) : null}
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta
                property="og:image"
                content="/icon-brand-gradient-fill.png"
                key="image"
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
    return (
        <Meta {...props}>
            <meta property="og:image" content={props.image} key="image" />
            <meta property="og:type" content="article" />
            {props.author && (
                <meta property="article:author" content={props.author} />
            )}
        </Meta>
    )
}
