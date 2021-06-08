'use strict'

const { docgen } = require('@krans/docgen')
const path = require('path')
const fetch = require('node-fetch')

const OUTPUT_DIR = path.resolve(__dirname, '../content')
const EXAMPLES_DIR = path.resolve(OUTPUT_DIR, 'examples')

const BASE_URL = 'https://raw.githubusercontent.com/kransio/krans/master/'

const TARGETS = ['examples/001-simple.ts', 'examples/002-extraction.ts']

Promise.all(
    TARGETS.map(async (target, index) => {
        const targeturl = [BASE_URL, target].join('/')
        const response = await fetch(targeturl)
        if (response.status > 299) {
            throw new Error(response.statusText)
        }
        const content = await response.text()
        return { path: target, content }
    })
).then(async (files) => {
    for (const file of files) {
        console.log(`Generating example ${file.path}`)
        console.log(file.content)
    }
    await docgen(files, {
        outDir: EXAMPLES_DIR,
    })
    console.log('Examples generated!')
})
