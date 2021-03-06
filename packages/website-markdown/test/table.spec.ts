import fs from 'fs'
import path from 'path'
import { generate } from '../lib'

const fixtures = path.resolve(__dirname, 'fixtures')

describe('table', () => {
    test('head cell', () => {
        expect(
            generate(
                fs
                    .readFileSync(path.resolve(fixtures, 'table.md'))
                    .toString('utf-8')
            ).content
        ).toContain(`Name`)
    })
    test('body cell', () => {
        expect(
            generate(
                fs
                    .readFileSync(path.resolve(fixtures, 'table.md'))
                    .toString('utf-8')
            ).content
        ).toContain(`A valid jsonpath selector string`)
    })
})
