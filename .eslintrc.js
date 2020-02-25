module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'comma-dangle': ['error', 'always-multiline'],
  },
  overrides: [
    {
      files: [
        '*.vue',
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      rules: {
        indent: 'off',
      },
      env: {
        jest: true,
      },
    },
  ],
}
