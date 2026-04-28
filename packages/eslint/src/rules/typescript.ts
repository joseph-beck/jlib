import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // No floating promises, always handle them with await or .then/.catch
  '@typescript-eslint/no-floating-promises': 'error',
  // Prefer type only imports, and separate them from value imports for better readability
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      fixStyle: 'separate-type-imports',
    },
  ],
  // No unused variables, unless prefixed with underscore
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'after-used',
      caughtErrors: 'all',
      ignoreRestSiblings: false,
      ignoreUsingDeclarations: false,
      reportUsedIgnorePattern: true,
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],
  // Prefer for-of loop over the standard for loop
  '@typescript-eslint/prefer-for-of': 'warn',
}

export { rules as typescriptRules }
