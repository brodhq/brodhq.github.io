import matter from 'gray-matter'
import marked from 'marked'
import hljs from 'highlight.js'
import { DocRenderer } from './infra/markdownRenderer'

export function generate(markdown: string) {
    const meta = matter(markdown)
    const renderer = new DocRenderer({
        blacklist: ['interfaces', 'functions', 'methods'],
    })
    const content = marked(meta.content, {
        renderer,
        // highlight: function (code, lang) {
        //     const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        //     return hljs.highlight(code, { language }).value
        // },
        headerIds: true,
    })
    return content
}
