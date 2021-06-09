---
title: 004-plugin
---
Send a HTTP request
```ts
import { Krans, Plugin } from 'krans'
import { http } from '@krans/http'

export const plugin: Plugin = {
    [Krans.plugin]: {
        name: 'my-plugin',
        depends: [http],
        register({ http }) {
            return {
                create() {
                    return {}
                },
                destroy() {},
            }
        },
    },
}
```