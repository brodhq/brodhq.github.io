---
section: protocols
title: Fetch
slug: fetch
---

## Overview

The fetch protocol is designed for fetching and parsing unstructured data over HTTP.

```typescript
const url = 'https://jsonplaceholder.typicode.com/todos/1'
const response = fetch(url, resp => 
  console.log(resp)
)
```

### fetch([type?, url, init[]?, callback?])

Send a request

- `type` - Set the expected response data type 
- `url` - HTTP URL of remote resource
- `init` - A list of fetch configurations
- `callback` - (optional) an optional callback receiving the response


### Fetch options

The fetch options control the behavior of the fetch object. Note that the options object is deeply cloned (with the exception of [`listener`](#fetch.options.listener) which is shallowly copied) and should not contain any values that are unsafe to perform deep copy on.

All options are optionals.

#### fetch.method([method])

Set the HTTP method.

##### Example

```typescript
await fetch(
  'https://jsonplaceholder.typicode.com/todos/1',
  fetch.method('post')
)
```

#### fetch.body([payload])

Set the HTTP body of the request.

##### Example

```typescript
await fetch(
  'https://jsonplaceholder.typicode.com/todos/1',
  fetch.body({
    data: true
  })
)
```

Default value: `'GET'`.

#### fetch.header([name, value])

Set a HTTP header.

##### Example

```typescript
await fetch(
  'https://jsonplaceholder.typicode.com/todos/1',
  fetch.header('Authorization', 'my token')
)
```