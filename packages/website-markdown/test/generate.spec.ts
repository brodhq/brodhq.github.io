import fs from 'fs'
import path from 'path'
import { generate } from '../lib'

const fixtures = path.resolve(__dirname, 'fixtures')

describe('generate', () => {
    test('simple', () => {
        expect(
            generate(
                fs
                    .readFileSync(path.resolve(fixtures, 'simple.md'))
                    .toString('utf-8')
            )
        ).toContain(`<p class=\"prose\">A simple scraping example</p>`)
    })
    test('code', () => {
        expect(
            generate(
                fs
                    .readFileSync(path.resolve(fixtures, 'simple.md'))
                    .toString('utf-8')
            )
        ).toContain(`<code class=\"language-typescript\"`)
    })
})
