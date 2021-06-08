import fs from 'fs'
import path from 'path'
import { generate } from '../lib'

const fixtures = path.resolve(__dirname, 'fixtures')

describe('generate', () => {
    test('text', () => {
        expect(
            generate(
                fs
                    .readFileSync(path.resolve(fixtures, 'simple.md'))
                    .toString('utf-8')
            ).content
        ).toContain(`<p class=\"prose\">A simple scraping example</p>`)
    })
})
