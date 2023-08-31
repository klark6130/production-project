module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "plugin:react/recommended", 
    "standard-with-typescript", 
    "plugin:i18next/recommended", 
    "plugin:storybook/recommended",
    "prettier"
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json', './cypress/tsconfig.json']
  },
  plugins: [
    'react', 
    'i18next',
    'react-hooks',
    'bastrikov-da-eslint-plugin',
    'unused-imports',
    // 'eslint-plugin-import' - В БУДУЩЕМ ОЧЕНЬ МОЖЕТ ПРИГОДИТЬСЯ!!!!
  ],
  rules: {
    'padded-blocks': ['off', 'never'],
    'no-trailing-spaces': 'off',
    'import/no-unresolved': 'off',
    "unused-imports/no-unused-imports": "off", // вроде бы полезный плагин, но ведь есть tree shaking
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
    "@typescript-eslint/no-namespace": "off",
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
    'bastrikov-da-eslint-plugin/path-checker': ['error', { alias: '@' }],
    'bastrikov-da-eslint-plugin/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing']
      }
    ],
    'bastrikov-da-eslint-plugin/public-api-imports': [
      'error', 
      { 
        alias: '@',
        testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx']
      }
    ],
    "react/jsx-max-props-per-line": ['error', {maximum: 4}]
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