---
title: 003-config
---
Send a HTTP request
```ts
// file ./krans.config.js
import { http } from '@krans/http'

export default {
    input: 'src/main',
    output: [
        {
            file: 'output.json',
        },
    ],
    plugins: [http()],
}

// file ./main.js
import { fetch } from '@krans/fetch'
import { Json } from '@krans/json'

export const main = fetch(Json, 'https://google.com', ({ data }) => ({
    title: data['title'].toString(),
    name: data['name'].toString(),
    description: data['description'].toString(),
    summary: data['summary'].toString(),
}))
```