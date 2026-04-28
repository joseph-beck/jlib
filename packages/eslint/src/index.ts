import tseslint from 'typescript-eslint';
import globals from 'globals';
import type { Linter } from 'eslint';

const rules = {};

const plugins = {
  '@typescript-eslint': tseslint.plugin,
};

const config: Array<Linter.Config> = [
  {
    name: 'jlib/ignore',
    ignores: ['**/build/**', '**/coverage/**', '**/dist/**'],
  },
  {
    name: 'jlib/ts',
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        parser: tseslint.parser,
      },
      globals: {
        ...globals.browser,
      },
    },
    rules,
    plugins,
  },
];

export { config };
