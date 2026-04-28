import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // Gives control to tseslint for unused variables, as it can ignore variables prefixed with underscore
  'no-unused-vars': 'off',
  // Warn against console statements
  'no-console': 'warn',
  //
  'object-property-newline': [
    'error',
    {
      allowAllPropertiesOnSameLine: false,
    },
  ],
  // Enforce new line when there is at least one property in an object
  'object-curly-newline': [
    'error',
    {
      ObjectExpression: {
        multiline: true,
        minProperties: 1,
        consistent: true,
      },
    },
  ],
  // Enforce consistent use of curly braces in control statements
  curly: ['error', 'all'],
  // Enforce padding lines between statements
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: 'expression',
      next: '*',
    },
    {
      blankLine: 'always',
      prev: '*',
      next: 'expression',
    },
    {
      blankLine: 'any',
      prev: 'expression',
      next: 'expression',
    },
  ],
  // Enforce the use of const for variables that are never reassigned after declared
  'prefer-const': 'error',
  // Enforce use of let and const
  'no-var': 'error',
  'no-with': 'error',
  // Warn against variable declarations from shadowing variables declared in the outer scope
  'no-shadow': 'warn',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-optional-chaining': 'error',
  'no-unused-labels': 'error',
  'no-unused-private-class-members': 'error',
  'no-useless-backreference': 'error',
  'no-useless-catch': 'error',
  'no-useless-escape': 'error',
  // Enforce no duplicates
  'no-dupe-else-if': 'error',
  'no-duplicate-case': 'error',
  // Enforce no variable declarations in case clauses
  'no-case-declarations': 'error',
  // Enforce === and !==
  eqeqeq: ['error', 'always'],
  // Never use eval
  'no-eval': 'error',
  // Never use implied eval
  'no-implied-eval': 'error',
}

export { rules as javascriptRules }
