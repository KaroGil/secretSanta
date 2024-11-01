// .eslintrc.js
module.exports = {
  env: {
    node: true, // Allows Node.js global variables like `module`
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error', // Enforce Prettier rules as ESLint errors
    // Add any other custom rules here
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
