module.exports = {
  extends: [
  	"eslint:recommended",
  	"google"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    es2020: true,
    browser: true
  },
  plugins: [
    'svelte3',
    '@typescript-eslint'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {},
  settings: {
  	'svelte3/typescript': true
  }
};
