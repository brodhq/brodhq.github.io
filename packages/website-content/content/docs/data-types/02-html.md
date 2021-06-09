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

___

### createFetch

▸ `Const` **createFetch**(): `FetchAdapter`<``"html"``, [HtmlPath](#htmlpath)\>

# Interfaces

## Htmlpath

  ## Properties

### get

• **get**: (`selector`: `string`) => [HtmlPath](#htmlpath)

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

#### Type declaration

▸ (): ``null`` \| `number` \| `Error`

#___

### toLink

• **toLink**: () => ``null`` \| `Error` \| `LinkType`

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

#### Type declaration

▸ (): ``null`` \| `string`

#___

### valueOf

• **valueOf**: () => `string`

#### Type declaration

▸ (): `string`

### Methods

