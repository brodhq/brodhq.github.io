import matter from 'gray-matter'
import { generate } from '@geislabs/website-markdown'
import path from 'path'
import { Guide, GuideReference, Section } from '../types'
import { titleize } from '../utils'

export async function getExamples(): Promise<Array<Section>> {
    const sections: Section[] = []
    const contexts = [
        [
            'simple',
            // @ts-expect-error
            require.context(`../../content/examples`, false, /\.md$/),
        ],
    ]
    for (let [sectionName, context] of contexts) {
        const guides: GuideReference[] = []
        for (const key of context.keys()) {
            const post = key.slice(2)
            const number = Number(post.slice(0, 2))
            const content = await import(`../../content/examples/${post}`)
            const meta = matter(content.default)
            const title = meta.data.title.replace(/^\d+-/, '').replace('-', ' ')
            guides.push({
                number,
                section: sectionName,
                filename: post,
                title: titleize(title),
                slug: `${sectionName}/${post.replace(/\.md$/, '')}`,
            })
        }
        sections.push({ name: sectionName.replace('-', ' '), guides })
    }
    return sections
}

export async function getExample(slugs: string[]): Promise<Guide> {
    const slug = path.join(...slugs)
    const sections = await getExamples()
    const all = sections.flatMap((section) => section.guides)
    const index = all.findIndex((guide) => guide.slug === slug)
    const reference = all[index]
    const fileContent = await import(
        `../../content/examples/${reference?.filename}`
    )
    const result = generate(fileContent.default)
    return {
        ...reference,
        ...result,
        previous: all[index - 1] ?? null,
        next: all[index + 1] ?? null,
    }
}
