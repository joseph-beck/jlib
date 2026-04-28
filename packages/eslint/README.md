# jblib eslint

defaults for eslint configs.

```ts
import { jblibConfig } from '@jblib/eslint'
import { type Linter } from 'eslint'

const config: Linter.Config[] = [
  ...jblibConfig,
  // Add your own customisations here
]

export default config
```
