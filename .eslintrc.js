module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
    'vue-global-api'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 'off', // process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': 'off', // process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off'
  }
}
