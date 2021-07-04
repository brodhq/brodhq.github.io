---
section: protocols
title: Fetch
slug: fetch
---



A set of functions for working with maps.

Many functions for maps, which implement the Enumerable protocol, are found in the Enum module. Additionally, the following functions for maps are found in Kernel:

**Example**

```typescript
import { fetch } from '@brod/fetch'
import { Json } from '@brod/json'

const url = 'https://jsonplaceholder.typicode.com/todos/1'
const response = fetch(Json, url, ({ data }) => ({
     id: data['id'].toInteger(),
     title: data['title'].toText(),
     completed: data['completed'].toBoolean()
}))
response.data === {
     id: 1,
     title: 'quis ut nam facilis et officia qui',
     completed: true
}
// => true
```

# Interfaces

## Fetchfn

▸ **FetchFn**(`type`, `init`): `AwaitableFetchRequest`

Fetch data at url as JSON

**Example**

```typescript
const response = fetch(Json, 'https://example.com/posts/1')
response.status
// => 200
```

▸ **FetchFn**(`type`, `init`): `AwaitableFetchRequest`

Fetch data at url using request as object properties

**Example**

```typescript
const response = fetch(Json, { url: 'https://example.com/posts/1', method: 'get' })
response.status
// => 200
```

▸ **FetchFn**(`type`, `init`, `callback`): `AwaitableFetchRequest`

Fetch data at url as JSON and parse response in callback

**Example**

```typescript
const response = fetch(Json, 'https://example.com/posts/1', response => ({
     title: response.data['title'].toString(),
     content: response.data['content'].toString(),
     postedAt: response.data['date'].toDate()
}))
response.title
// => 'my post'
```
