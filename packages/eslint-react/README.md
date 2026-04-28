# jlib eslint react

defaults for eslint react configs. it is recommended to use this alongside [@jlib/eslint](../eslint/).

```ts
import { jlibConfig } from '@jlib/eslint'
import { jlibReactConfig } from '@jlib/eslint-react'

export default [
  ...jlibConfig
  ...jlibReactConfig,
  // Add your own customisations here
]
```
