import { Renderer, Slugger } from 'marked'
import { GuideSection } from '../types'

export interface DocRendererSubSection {
    title: string
    id: string
}

interface DocRendererConfig {
    blacklist: string[]
}

export class DocRenderer extends Renderer {
    public subsections: GuideSection[] = []

    constructor(public config: DocRendererConfig) {
        super()
    }

    // @ts-expect-error
    heading(text, level, raw, slugger: Slugger) {
        const slug = slugger.slug(text)
        if (
            level === 3 &&
            !this.config.blacklist.includes(text.toLowerCase())
        ) {
            this.subsections.push({ name: text, slug })
        }
        return `<h${level} id=${slug} class="prose prose-2xl">${text}</h${level}>`
    }

    // @ts-expect-error
    paragraph(text) {
        return `<p class="prose">${text}</p>`
    }
    // codespan(text) {
    //     return `<code class="prose px-1 bg-primary-50 text-primary-900">${text}</code>`
    // }
    // codespan(text) {
    //     return `<code class="prose font-xs px-2 text-gray-400 bg-gray-800 py-0.5 rounded-sm">${text}</code>`
    // }
    // blockquote(text) {
    //     return `<blockquote class="px-1 bg-primary-50 text-primary-900">${text}</blockquote>`
    // }

    // @ts-expect-error
    list(body) {
        return `<ul class="prose">${body}</ul>`
    }

    // @ts-expect-error
    listitem(text) {
        return `<li class="p-1 ml-10">${text}</li>`
    }
}
