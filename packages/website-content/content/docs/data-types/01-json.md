---
section: data-types
title: Json
slug: json
---



## Functions

### Json

▸ **Json**(`content?`, `path?`, `config?`): [JsonPath](#jsonpath)

Constructs a new json path from either a raw string
or an object

#### Example

```typescript
const value = Json(`{"value": 5}`).get('value').toInteger()
// => 5
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `content?` | `string` \| `object` |
| `path?` | `string` |
| `config?` | `Partial`<JsonConfig\> |

# Interfaces

## Jsonpath

A JsonPath represents a nested selection of
properties inside a JSON document

  ## Methods

___

### get

▸ **get**(`selector`): [JsonPath](#jsonpath)

Extract a nested json value

#### Example

```typescript
const json = Json(`{"value": 5}`).get('value').toInteger()
// => 5
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `string` | A valid jsonpath selector string |

___

### toArray

▸ **toArray**(): `JsonValue`[]

Returns the current element selection as
an array of elements

#### Example

```typescript
const values = json.toArray()
// => [1, 2, 3]
```

___

### toBoolean

▸ **toBoolean**(): ``null`` \| `boolean` \| `Error`

Return current json value as a boolean

#### Example

```typescript
const json = Json('{"value": true}').get('value').toBoolean()
// => true
```

___

### toInteger

▸ **toInteger**(): ``null`` \| `number` \| `Error`

Return current json value as an integer

#### Example

```typescript
const json = Json(`{"value": 5}`, 'value').toInteger()
// => 5
const json = Json(`{"value": 'not a number'}`, 'value').toInteger()
// => Error
const json = Json(`{"value": 5}`, 'unknown').toInteger()
// => null
```

___

### toString

▸ **toString**(): ``null`` \| `string`

Return string value

#### Example

```typescript
const json = Json('{"value": 5}').get('value').toString()
// => '5'
```

___

### valueOf

▸ **valueOf**(): `object` \| `object`[]

Unwraps the inner json value

#### Example

```typescript
const json = Json('{"value": 5}').valueOf()
// => {value: 5}
```

