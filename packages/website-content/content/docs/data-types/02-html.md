---
section: data-types
title: Html
slug: html
---



## Functions

### Html

▸ **Html**(`content?`, `selector?`, `config?`): [HtmlPath](#htmlpath)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content?` | `string` |
| `selector?` | `string` |
| `config?` | `Partial`<HtmlConfig\> |

# Interfaces

## Htmlpath

A HtmlPath represents a nested selection of
properties inside a HTML document

  ## Properties

### get

• **get**: (`selector`: `string`) => [HtmlPath](#htmlpath)

Extract a nested html value

**`param`** A valid css selector string

#### Example

```typescript
const html = Html("<html><h1>some title</h1></html>").get('h1').toString()
// => 'some title'
```

#### Type declaration

▸ (`selector`): [HtmlPath](#htmlpath)

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#___

### toArray

• **toArray**: () => [HtmlPath](#htmlpath)[]

#### Type declaration

▸ (): [HtmlPath](#htmlpath)[]

#___

### toBoolean

• **toBoolean**: () => ``null`` \| `boolean` \| `Error`

Return boolean value

#### Example

```typescript
const html = Html("<html><span>true</span></html>", 'span').toBoolean()
// => true
```

#### Type declaration

▸ (): ``null`` \| `boolean` \| `Error`

#___

### toFile

• **toFile**: () => ``null`` \| `Error` \| `PendingFile`

#### Type declaration

▸ (): ``null`` \| `Error` \| `PendingFile`

#___

### toImage

• **toImage**: () => ``null`` \| `Error` \| `PendingFile`

#### Type declaration

▸ (): ``null`` \| `Error` \| `PendingFile`

#___

### toInteger

• **toInteger**: () => ``null`` \| `number` \| `Error`

Return string value

#### Example

```typescript
const html = Html("<html><span>5</span></html>", 'span').toInteger()
// => 5
```

#### Type declaration

▸ (): ``null`` \| `number` \| `Error`

#___

### toLink

• **toLink**: () => ``null`` \| `Error` \| `LinkType`

Return a link

#### Example

```typescript
const html = Html("<html><a href="http://example.com">my link</a></html>", 'a').toLink()
// => { name: 'my link', href: 'http://example.com' }
```

#### Type declaration

▸ (): ``null`` \| `Error` \| `LinkType`

#___

### toRaw

• **toRaw**: () => `string`

#### Type declaration

▸ (): `string`

#___

### toString

• **toString**: () => ``null`` \| `string`

Return string value

#### Example

```typescript
const html = Html("<html><h1>some title</h1></html>", 'h1').toString()
// => 'some title'
```

#### Type declaration

▸ (): ``null`` \| `string`

#___

### valueOf

• **valueOf**: () => `string`

#### Type declaration

▸ (): `string`

### Methods

