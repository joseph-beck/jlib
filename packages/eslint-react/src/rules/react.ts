import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // No new lines in JSX
  'react/jsx-newline': ['error', { prevent: true }],
  // No useless fragments in JSX
  'react/jsx-no-useless-fragment': 'error',
  // No boolean values in JSX
  'react/jsx-boolean-value': ['error', 'never'],
}

export { rules as reactRules }
