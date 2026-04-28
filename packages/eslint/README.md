# jlib eslint

defaults for eslint configs.

```ts
import { jlibConfig } from '@jlib/eslint'
import { type Linter } from 'eslint'

const config: Linter.Config[] = [
  ...jlibConfig,
  // Add your own customisations here
]

export default config
```
