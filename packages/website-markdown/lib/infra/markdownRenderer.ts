import { Code, Table } from '@geislabs/website-ui'
import parse, { domToReact } from 'html-react-parser'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Renderer, Slugger } from 'marked'
import { GuideSection } from '../markdownTypes'
import { HeaderLevel } from '../markdownConfig'

export interface DocRendererSubSection {
    title: string
    id: string
}

interface CustomRendererProps {
    levels: HeaderLevel[]
    blacklist: string[]
}

export class CustomRenderer extends Renderer {
    public subsections: GuideSection[] = []

    constructor(public config: CustomRendererProps) {
        super()
    }

    // @ts-expect-error
    heading(text, level, raw, slugger: Slugger) {
        const slug = slugger.slug(text)
        if (
            this.config.levels.includes(level) &&
            !this.config.blacklist.includes(text.toLowerCase())
        ) {
            this.subsections.push({ name: text, slug })
        }
        if (level === 1) {
            return `<h2 id=${slug} class="prose prose-2xl">${text}</h2>`
        }
        if (level === 2) {
            return `<h2 id=${slug} class="prose prose-2xl">${text}</h2>`
        }
        if (level === 3) {
            return `<h3 id=${slug} class="prose prose-xl">${text}</h3>`
        }
        if (level === 4) {
            return `<h4 id=${slug} class="prose prose-lg">${text}</h4>`
        }
        return `<h${level} id=${slug} class="prose">${text}</h${level}>`
    }

    // @ts-expect-error
    paragraph(text) {
        return `<p class="prose">${text}</p>`
    }

    table(header: string, body: string) {
        const element = React.createElement(Table.Table, {
            // @ts-expect-error
            headers: parse(header, {
                replace: (node) => {
                    // @ts-expect-error
                    switch (node.name) {
                        case 'th': {
                            return React.createElement(Table.HeadCell, {
                                // @ts-expect-error
                                children: domToReact(node.children),
                            })
                        }
                    }
                },
            }),
            children: parse(body, {
                replace: (node) => {
                    // @ts-expect-error
                    switch (node.name) {
                        case 'td': {
                            return React.createElement(Table.BodyCell, {
                                // @ts-expect-error
                                children: domToReact(node.children),
                            })
                        }
                    }
                },
            }),
        })
        return renderToString(element)
    }

    code(text: string) {
        const element = React.createElement(Code, {
            darkmode: true,
            children: text,
        })
        return renderToString(element)
    }

    // @ts-expect-error
    list(body) {
        return `<ul class="prose">${body}</ul>`
    }

    // @ts-expect-error
    listitem(text) {
        return `<li class="p-1 ml-10">${text}</li>`
    }
}
