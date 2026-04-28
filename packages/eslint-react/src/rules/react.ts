import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // No new lines in JSX
  'react/jsx-newline': [
    'error',
    {
      prevent: true,
    },
  ],
  // No useless fragments in JSX
  'react/jsx-no-useless-fragment': 'error',
  // No boolean values in JSX
  'react/jsx-boolean-value': ['error', 'never'],
  // Enforce self-closing tags for components without children
  'react/self-closing-comp': 'error',
  // Warn against use of array index as key
  'react/no-array-index-key': 'warn',
  // Warn against missing display name
  'react/display-name': 'warn',
}

export { rules as reactRules }
