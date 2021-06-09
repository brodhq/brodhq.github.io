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

  ## Methods

___

### get

▸ **get**(`selector`): [HtmlPath](#htmlpath)

Extract a nested html value

#### Example

```typescript
const html = Html('<html><h1>some title</h1></html>').get('h1').toString()
// => 'some title'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `string` | A valid css selector string |

___

### toArray

▸ **toArray**(): [HtmlPath](#htmlpath)[]

___

### toBoolean

▸ **toBoolean**(): ``null`` \| `boolean` \| `Error`

Return boolean value

#### Example

```typescript
const html = Html('<html><span>true</span></html>', 'span').toBoolean()
// => true
```

___

### toFile

▸ **toFile**(): ``null`` \| `Error` \| `PendingFile`

___

### toImage

▸ **toImage**(): ``null`` \| `Error` \| `PendingFile`

___

### toInteger

▸ **toInteger**(): ``null`` \| `number` \| `Error`

Return string value

#### Example

```typescript
const html = Html('<html><span>5</span></html>', 'span').toInteger()
// => 5
```

___

### toLink

▸ **toLink**(): ``null`` \| `Error` \| `LinkType`

Return a link

#### Example

```typescript
const html = Html('<html><a href="http://example.com">my link</a></html>', 'a').toLink()
// => { name: 'my link', href: 'http://example.com' }
```

___

### toRaw

▸ **toRaw**(): `string`

___

### toString

▸ **toString**(): ``null`` \| `string`

Return string value

#### Example

```typescript
const html = Html('<html><h1>some title</h1></html>', 'h1').toString()
// => 'some title'
```

___

### valueOf

▸ **valueOf**(): `string`

