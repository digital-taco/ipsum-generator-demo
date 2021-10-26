module.exports = {
  extends: ['@digital-taco/eslint-config/react', 'plugin:react/recommended'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'react/jsx-wrap-multilines': 'off',
    'react/prop-types': 'off',
  },
}
