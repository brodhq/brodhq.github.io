---
title: 003-config
---
Send a HTTP request
```ts
// file ./pansar.config.js
import { http } from '@pansar/http'

export default {
    input: 'src/main',
    output: [File(Json, 'my-file.json')],
    plugins: [http()],
}

// file ./main.js
import { fetch } from '@pansar/fetch'
import { Json } from '@pansar/json'

export const main = fetch(Json, 'https://google.com', ({ data }) => ({
    title: data['title'].toString(),
    name: data['name'].toString(),
    description: data['description'].toString(),
    summary: data['summary'].toString(),
}))
```