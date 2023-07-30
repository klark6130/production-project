module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "plugin:i18next/recommended", "plugin:storybook/recommended"],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: [
    'react', 
    'i18next',
    'react-hooks',
    'bastrikov-da-eslint-plugin'
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'indent': [2, 2],
    'padded-blocks': ['off', 'never'],
    'no-trailing-spaces': 'off',
    'import/no-unresolved': 'off',
    "semi": "off",
    "eol-last": ["off"],
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-floating-promises": "off", //
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-invalid-void-type": "off",
    "@typescript-eslint/indent": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": ["off", { "ignoreTranspilerName": false, "checkContextObjects": true }],
    "i18next/no-literal-string": ['error', {
      markupOnly: true,
      ignoreAttribute: ["data-testid", "to"]
    }],
    "react-hooks/rules-of-hooks": "error", // Проверяем правила хуков
    "react-hooks/exhaustive-deps": "error", // Проверяем зависимости эффекта
    "no-undef": "off",
    'bastrikov-da-eslint-plugin/path-checker': ['error', { alias: '@' }]
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}', './scripts/**/*.js'],
    rules: {
      'i18next/no-literal-string': 'off'
    }
  }]
};