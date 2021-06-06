const { docgen } = require('@krans/docgen')
const path = require('path')
const { outdent } = require('outdent')

docgen(
    [
        {
            path: 'examples/01-simple.js',
            content: outdent`
                /**
                 * @file A simple scraping example
                 */
                import { fetch } from 'krans'

                const response = fetch('https://google.com')
                console.log(response)
            `,
        },
        {
            path: 'examples/02-pagination.js',
            content: outdent`
                /**
                 * @file A simple scraping example with pagination
                 */
                import { fetch } from 'krans'
                
                const response = fetch('https://google.com')
                console.log(response)
            `,
        },
    ],
    {
        outDir: path.resolve(__dirname, '../content', 'examples'),
    }
)
