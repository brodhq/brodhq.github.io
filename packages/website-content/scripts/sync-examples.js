'use strict'
require('dotenv').config()

const { docgen } = require('@krans/docgen')
const path = require('path')
const OUTPUT_DIR = path.resolve(__dirname, '../content')
const EXAMPLES_DIR = path.resolve(OUTPUT_DIR, 'examples')

const { Downloader } = require('github-download-directory')
const downloader = new Downloader({
    github: { auth: process.env.GITHUB_PERSONAL_TOKEN },
})

downloader
    .fetchFiles('pansarhq', 'krans', 'examples')
    .then(async (response) => {
        const files = response.map(({ path, contents }) => ({
            path,
            content: contents.toString('utf-8'),
        }))
        for (const file of files) {
            console.log(`Generating example ${file.path}`)
        }
        await docgen(files, {
            outDir: EXAMPLES_DIR,
        })
        console.log('Examples generated!')
    }, console.error)
