'use strict'

var fetch = require('node-fetch')
var fs = require('fs')
var path = require('path')
const { outdent } = require('outdent')

const OUTPUT_DIR = path.resolve(__dirname, '../content')
const DOCS_DIR = path.resolve(OUTPUT_DIR, 'docs')

const targets = [
    {
        section: 'protocols',
        title: 'Fetch',
        slug: 'fetch',
        path: 'protocols/01-fetch.md',
        url: `https://raw.githubusercontent.com/brodhq/fetch/master/docs/README.md`,
    },
    {
        section: 'data-types',
        title: 'Json',
        slug: 'json',
        path: 'data-types/01-json.md',
        url: `https://raw.githubusercontent.com/brodhq/json/master/docs/README.md`,
    },
    {
        section: 'data-types',
        title: 'Html',
        slug: 'html',
        path: 'data-types/02-html.md',
        url: `https://raw.githubusercontent.com/brodhq/html/master/docs/README.md`,
    },
]
Promise.all(
    targets.map(async (target, index) => {
        const absolute = path.resolve(DOCS_DIR, target.path)
        const response = await fetch(target.url)
        let markdown = await response.text()

        // Remove title
        const titleregex = /# README/
        markdown = markdown.replace(titleregex, '')

        // Remove interfaces
        const interfaceregex = /## Interfaces(\s*.*)\n+/g
        markdown = markdown.replace(interfaceregex, '')

        // Replace examples
        const exampleregex = /\*\*`example`\*\*/g
        markdown = markdown.replace(exampleregex, '#### Example\n')

        // Remove return sections
        const returnsregex = /#### Returns(\s*.*)\n*/g
        markdown = markdown.replace(returnsregex, '')

        // Remove hierarchy sections
        const hierachy = /## Hierarchy(\s*.*)\n*/g
        markdown = markdown.replace(hierachy, '')

        // Remove iterator sections
        const hierachyregex = /### \[Symbol\.iterator\](\s*.*)\n*/g
        markdown = markdown.replace(hierachyregex, '')

        // Remove inherit sections
        const inheritregex = /#### Inherited from(\s*.*)\n*/g
        markdown = markdown.replace(inheritregex, '')

        // Remove enter symbols
        const enterregex = /↳ (\s*.*)\n*/g
        markdown = markdown.replace(enterregex, '')

        // Add frontmattter
        markdown = [
            outdent`
            ---
            section: ${target.section}
            title: ${target.title}
            slug: ${target.slug}
            ---`,
            markdown,
        ].join('\n\n')

        console.log(`writing ${target.path}`)
        fs.writeFileSync(absolute, markdown)
    })
)
