import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // No new lines in JSX
  'react/jsx-newline': [
    'error',
    {
      prevent: true,
    },
  ],
  // Enforce consistent function component style
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
  // No unnecessary curly braces in JSX
  'react/jsx-curly-brace-presence': [
    'error',
    {
      props: 'never',
      children: 'never',
    },
  ],
  // No useless fragments in JSX
  'react/jsx-no-useless-fragment': 'error',
  // Prefer fragments shorthand <>...</>
  'react/jsx-fragments': ['warn', 'syntax'],
  // No boolean values in JSX
  'react/jsx-boolean-value': ['error', 'never'],
  // Enforce self-closing tags for components without children
  'react/self-closing-comp': 'error',
  // Warn against use of array index as key
  'react/no-array-index-key': 'warn',
  // Warn against missing display name
  'react/display-name': 'warn',
  // Enforce that children is not used as a prop
  'react/no-children-prop': 'error',
  // Warn against unstable nested component definitions
  'react/no-unstable-nested-components': [
    'warn',
    {
      allowAsProps: true,
    },
  ],
  // Prefer destructuring props/state
  'react/destructuring-assignment': ['warn', 'always'],
  // No accidental duplicate props
  'react/jsx-no-duplicate-props': 'error',
}

export { rules as reactRules }
