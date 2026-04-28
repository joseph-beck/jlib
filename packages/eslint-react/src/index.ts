import { type Linter } from 'eslint'
import react from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const rules = {}

const plugins = {
  react: react,
  'react-refresh': reactRefresh,
}

const config: Linter.Config[] = [
  {
    name: 'jlib/tsx',
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
