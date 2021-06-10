import { generate } from '@geislabs/website-markdown'
import matter from 'gray-matter'
import path from 'path'
import { GuideReference, Section, Guide } from '../types'

export async function getAPIs(): Promise<Array<Section>> {
    const sections: Section[] = []
    const contexts = [
        [
            'protocols',
            // @ts-expect-error
            require.context(`../../content/docs/protocols`, false, /\.md$/),
        ],
        [
            'data-types',
            // @ts-expect-error
            require.context(`../../content/docs/data-types`, false, /\.md$/),
        ],
    ]
    for (let [sectionName, context] of contexts) {
        const guides: GuideReference[] = []
        for (const key of context.keys()) {
            const post = key.slice(2)
            const number = Number(post.slice(0, 2))
            const content = await import(
                `../../content/docs/${sectionName}/${post}`
            )
            const meta = matter(content.default)
            guides.push({
                number,
                section: meta.data.section,
                filename: post,
                title: meta.data.title,
                slug: `${sectionName}/${meta.data.slug}`,
            })
        }
        sections.push({ name: sectionName.replace('-', ' '), guides })
    }
    return sections
}

export async function getAPI(slugs: string[]): Promise<Guide> {
    const slug = path.join(...slugs)
    const sections = await getAPIs()
    const all = sections.flatMap((section) => section.guides)
    const index = all.findIndex((guide) => guide.slug === slug)
    const reference = all[index]
    const fileContent = await import(
        `../../content/docs/${reference?.section}/${reference?.filename}`
    )
    const result = generate(fileContent.default, { subsectionLevels: [2, 3] })
    return {
        ...reference,
        ...result,
        previous: all[index - 1] ?? null,
        next: all[index + 1] ?? null,
    }
}
