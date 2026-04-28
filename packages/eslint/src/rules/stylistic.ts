import { type Linter } from 'eslint'

/**
 * @see https://eslint.style/packages/js
 */
const rules: Linter.RulesRecord = {
  // Enforce consistency of spacing after the start of a comment
  '@stylistic/spaced-comment': 'error',
}

export { rules as stylisticRules }
