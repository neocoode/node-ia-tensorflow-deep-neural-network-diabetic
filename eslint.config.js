// eslint.config.js
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname, // Caminho base do projeto
});

// Configuração do ESLint
module.exports = [
  {
    ignores: ['node_modules/**', 'dist/**', 'coverage/**'], // Substitui o .eslintignore
  },
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  {
    files: ['**/*.ts', '**/*.js'], // Aplica o ESLint a arquivos .ts e .js
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
