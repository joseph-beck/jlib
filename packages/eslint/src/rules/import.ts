import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // Consistent type specifier style, prefer inline type specifiers for better readability
  // import { type Foo } from './foo' is more readable than import type { Foo } from './foo'
  'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
}

export { rules as importRules }
