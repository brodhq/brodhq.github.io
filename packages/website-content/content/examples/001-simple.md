---
title: 001-simple
---
Send a HTTP request
```ts
import { fetch } from '..'

const response = fetch('google.com', ({ data }) => ({
    title: 1,
})).then(console.log)
```