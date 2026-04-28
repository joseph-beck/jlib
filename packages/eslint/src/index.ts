import { type Linter } from 'eslint'
import importPlugin from 'eslint-plugin-import'
import importSortPlugin from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { importRules } from './rules/import'
import { importSortRules } from './rules/import-sort'
import { typescriptRules } from './rules/typescript'

const rules = {
  ...typescriptRules,
  ...importRules,
  ...importSortRules,
}

const plugins = {
  '@typescript-eslint': tseslint.plugin,
  import: importPlugin,
  'simple-import-sort': importSortPlugin,
}

const config: Linter.Config[] = [
  {
    name: 'jlib/ignore',
    ignores: ['**/build/**', '**/coverage/**', '**/dist/**'],
  },
  {
    name: 'jlib/ts',
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        parser: tseslint.parser,
      },
      globals: {
        ...globals.browser,
      },
    },
    rules,
    plugins,
  },
]

export { config }
