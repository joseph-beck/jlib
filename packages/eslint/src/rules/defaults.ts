import { type Linter } from 'eslint'
import tseslint from 'typescript-eslint'

const defaults: Linter.Config[] = [...tseslint.configs.strict, ...tseslint.configs.stylistic]

export { defaults }
