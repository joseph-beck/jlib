import { type Linter } from 'eslint'
import react from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'

const rules = {}

const plugins = {
  react: react,
  'react-refresh': reactRefresh,
}

const config: Linter.Config[] = [
  {
    name: 'jlib/tsx',
    files: ['**/*.{ts,tsx}'],
    rules,
    plugins,
  },
]

export { config }
