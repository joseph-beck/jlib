# jblib eslint react

defaults for eslint react configs. it is recommended to use this alongside [@jblib/eslint](../eslint/).

```ts
import { jblibConfig } from '@jblib/eslint'
import { jblibReactConfig } from '@jblib/eslint-react'

const config: Linter.Config[] = [
  ...jblibConfig,
  ...jblibReactConfig,
  // Add your own customisations here.
]

export default config
```

## monorepos

when being used in a monorepo I often encountered issues with conflicting `tsconfigRootDir`, to fix this issue please see below.

```ts
import { jblibConfig } from '@jblib/eslint'
import { jblibReactConfig } from '@jblib/eslint-react'
import { type Linter } from 'eslint'

const config: Linter.Config[] = [
  ...jblibConfig,
  ...jblibReactConfig,
  // Specify the root of your current project.
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
  },
  // Add your own customisations here.
]

export default config
```
