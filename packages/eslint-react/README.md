# jblib eslint react

defaults for eslint react configs. it is recommended to use this alongside [@jblib/eslint](../eslint/).

```ts
import { jblibConfig } from '@jblib/eslint'
import { jblibReactConfig } from '@jblib/eslint-react'

const config: Linter.Config[] = [
  ...jblibConfig
  ...jblibReactConfig,
  // Add your own customisations here
]

export default config
```
