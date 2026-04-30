# jblib eslint

defaults for eslint configs.

```ts
import { jblibConfig } from '@jblib/eslint'
import { type Linter } from 'eslint'

const config: Linter.Config[] = [
  ...jblibConfig,
  // Add your own customisations here.
]

export default config
```

## monorepos

when being used in a monorepo I often encountered issues with conflicting `tsconfigRootDir`, to fix this issue please see below.

```ts
import { jblibConfig } from '@jblib/eslint'
import { type Linter } from 'eslint'

const config: Linter.Config[] = [
  ...jblibConfig,
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
