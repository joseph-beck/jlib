import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // Warn if a file exports something that isn't a React component
  'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
}

export { rules as reactRefreshRules }
