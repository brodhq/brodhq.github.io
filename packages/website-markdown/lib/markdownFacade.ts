import matter from 'gray-matter'
import marked from 'marked'
import { CustomRenderer } from './infra/markdownRenderer'
import { GenerateConfig } from './markdownConfig'
import { GenerateResult } from './markdownTypes'

export function generate(
    markdown: string,
    { subsectionLevels: levels = [2] }: Partial<GenerateConfig> = {}
): GenerateResult {
    const meta = matter(markdown)
    const renderer = new CustomRenderer({
        blacklist: ['interfaces', 'functions', 'methods'],
        levels,
    })
    const content = marked(meta.content, {
        renderer,
        headerIds: true,
    })
    return { content, subsections: renderer.subsections }
}
