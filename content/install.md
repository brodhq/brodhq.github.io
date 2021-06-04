---
title: 'Installing Geis'
section: install
layout: default
---

# Overview

This tutorial will show how to set up a basic Geis app that displays "Hello World!" in your browser.

## Installing Geis

Create a new directory myproject, and from there:

* Run: `cd myproject`, this goes into the created project folder.
* Run: `cd myproject`, this goes into the created project folder.
* Run: `cd myproject`, this goes into the created project folder.


## Calling a JSON API

The preferred option for installing Geis. Choose your operating system and tool.


```typescript
import { fetch } from 'geis'

// Fetch google and parse as JSON
const data = fetch('json://google.com', ({ data }) => ({
    title: data['title'].toString(),
    description: data['description'].toString(),
    summary: data['summary'].toString(),
    createdAt: data['created_at'].toDate()
}))

assert(data === [{ title: 'jack' }])
```

## More stuff

The preferred option for installing Geis. Choose your operating system and tool.