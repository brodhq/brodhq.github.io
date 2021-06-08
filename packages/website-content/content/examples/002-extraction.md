---
title: 002-extraction
---
Send a HTTP request
```ts
import { fetch } from '..'

const response = fetch('google.com', ({ data }) => ({
    title: data['title'].toString(),
})).then(console.log)
```