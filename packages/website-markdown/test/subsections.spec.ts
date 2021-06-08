import fs from 'fs'
import path from 'path'
import { generate } from '../lib'

const fixtures = path.resolve(__dirname, 'fixtures')

describe('subsections', () => {
    test('simple', () => {
        expect(
            generate(
                fs
                    .readFileSync(path.resolve(fixtures, 'subsections.md'))
                    .toString('utf-8'),
                { subsectionLevels: [2] }
            ).subsections
        ).toStrictEqual([
            {
                name: 'Subsection 1',
                slug: 'subsection-1',
            },
            {
                name: 'Subsection 2',
                slug: 'subsection-2',
            },
            {
                name: 'Subsection 3',
                slug: 'subsection-3',
            },
        ])
    })
})
