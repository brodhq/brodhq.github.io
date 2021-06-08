import fs from 'fs'
import path from 'path'
import { generate } from '../lib'

const fixtures = path.resolve(__dirname, 'fixtures')

describe('code', () => {
    test('simple', () => {
        expect(
            generate(
                fs
                    .readFileSync(path.resolve(fixtures, 'simple.md'))
                    .toString('utf-8')
            ).content
        ).toContain(`<code class=\"language-typescript\"`)
    })
})
