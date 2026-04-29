# jblib should

helpful assertions and conditions for typescript.

```ts
import { shouldNever } from '@jblib/should'

const obj = {
  field: in?.thing ?? shouldNever()
}
```

fail loudly in conditions that should never be met!
