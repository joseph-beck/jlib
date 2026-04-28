import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // No explicit any, always prefer a more specific type
  '@typescript-eslint/no-explicit-any': 'error',
  // No floating promises, always handle them with await or .then/.catch
  '@typescript-eslint/no-floating-promises': 'error',
  // Warn about async functions which have no await expression
  '@typescript-eslint/require-await': 'warn',
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
  // Enforce the use of as const over literal type
  '@typescript-eslint/prefer-as-const': 'error',
  // Prevent @ts-ignore, allow @ts-expect-error
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': false,
      'ts-ignore': 'allow-with-description',
    },
  ],
  // No dupe enums
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  // No for in loops
  '@typescript-eslint/no-for-in-array': 'error',
  // Don't over-define types for simple things like strings
  '@typescript-eslint/no-inferrable-types': [
    'error',
    {
      ignoreParameters: true,
    },
  ],
}

export { rules as typescriptRules }
