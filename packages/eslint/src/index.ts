import stylisticPlugin from '@stylistic/eslint-plugin'
import { type Linter } from 'eslint'
import importPlugin from 'eslint-plugin-import'
import importSortPlugin from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { defaults } from './rules/defaults.js'
import { importRules } from './rules/import.js'
import { importSortRules } from './rules/import-sort.js'
import { javascriptRules } from './rules/javascript.js'
import { stylisticRules } from './rules/stylistic.js'
import { typescriptRules } from './rules/typescript.js'

const rules = {
  ...typescriptRules,
  ...importRules,
  ...importSortRules,
  ...stylisticRules,
  ...javascriptRules,
}

const plugins = {
  '@typescript-eslint': tseslint.plugin,
  '@stylistic': stylisticPlugin,
  import: importPlugin,
  'simple-import-sort': importSortPlugin,
}

const config: Linter.Config[] = [
  ...defaults,
  {
    name: 'jlib/ignore',
    ignores: ['**/build/**', '**/coverage/**', '**/dist/**', '**/dev-dist/**', '**/.vite/**'],
  },
  {
    name: 'jlib/ts',
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,
      parser: tseslint.parser,
      parserOptions: {
        parser: tseslint.parser,
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json'],
      },
      globals: {
        ...globals.browser,
      },
    },
    rules,
    plugins,
  },
]

export { config as jlibConfig }
