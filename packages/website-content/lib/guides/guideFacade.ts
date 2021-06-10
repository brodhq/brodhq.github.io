import { generate } from '@geislabs/website-markdown'
import matter from 'gray-matter'
import path from 'path'
import { Guide } from '../types'
import { GuideReference, Section } from '../types'

export async function getGuides(): Promise<Array<Section>> {
    const sections: Section[] = []
    const contexts = [
        [
            'getting-started',
            // @ts-expect-error
            require.context(
                `../../content/guides/getting-started`,
                false,
                /\.md$/
            ),
        ],
        [
            'metaprogramming',
            // @ts-expect-error
            require.context(
                `../../content/guides/metaprogramming`,
                false,
                /\.md$/
            ),
        ],
    ]
    for (let [sectionName, context] of contexts) {
        const guides: GuideReference[] = []
        for (const key of context.keys()) {
            const post = key.slice(2)
            const number = Number(post.slice(0, 2))
            const content = await import(
                `../../content/guides/${sectionName}/${post}`
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

export async function getGuide(slugs: string[]): Promise<Guide> {
    const slug = path.join(...slugs)
    const sections = await getGuides()
    const all = sections.flatMap((section) => section.guides)
    const index = all.findIndex((guide) => guide.slug === slug)
    const reference = all[index]
    const fileContent = await import(
        `../../content/guides/${reference?.section}/${reference?.filename}`
    )
    const result = generate(fileContent.default)
    return {
        ...reference,
        ...result,
        previous: all[index - 1] ?? null,
        next: all[index + 1] ?? null,
    }
}
