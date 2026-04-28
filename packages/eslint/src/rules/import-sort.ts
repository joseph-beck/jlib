import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // Imports must be sorted
  'simple-import-sort/imports': 'error',
  // Exports must be sorted
  'simple-import-sort/exports': 'error',
}

export { rules as importSortRules }
