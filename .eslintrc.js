module.exports = {
  // Specifying Environments
  // An environment defines global variables that are predefined
  // https://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true, // browser global variables
    es6: true, // enable all ECMAScript 6 features except for modules
    node: true, // Node.js global variables and Node.js scoping.
    'jest/globals': true, // eslint-plugin-jest https://www.npmjs.com/package/eslint-plugin-jest
  },

  // Using "eslint:recommended"
  // 'eslint:recommended': チェックの付いている推奨ルールがすべて適応される。
  // https://eslint.org/docs/user-guide/configuring#using-eslint-recommended
  // https://eslint.org/docs/rules/

  // Using the configuration from a plugin
  // The plugins property value can omit the eslint-plugin- prefix of the package name.
  // The extends property value can consist of:
  // * plugin:
  // * the package name (from which you can omit the prefix, for example, react)
  // * /
  // * the configuration name (for example, recommended)
  // https://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin
  extends: [
    'eslint:recommended', // eslint
    'airbnb', // eslint-config-airbnb
    'plugin:react/recommended', // eslint-plugin-react
    'plugin:jsx-a11y/recommended', // eslint-plugin-jsx-a11y
    'plugin:jest/recommended', // eslint-plugin-jest
    'plugin:jest/style', // eslint-plugin-jest
    'plugin:import/errors', // eslint-plugin-import
    'plugin:import/warnings', // eslint-plugin-import
    'plugin:import/typescript', // @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/eslint-recommended', // @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // eslint-plugin-prettier
    'prettier', // eslint-plugin-prettier
    'prettier/@typescript-eslint', // eslint-plugin-prettier
    'prettier/react', // eslint-plugin-prettier
    'prettier/standard', // eslint-plugin-prettier
  ],

  // Specifying Globals
  // the additional global variables your script accesses during execution
  // https://eslint.org/docs/user-guide/configuring#specifying-globals
  globals: {
    Atomics: 'readonly', // [Atomics](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Atomics)
    SharedArrayBuffer: 'readonly', // [SharedArrayBuffer](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
    __DEV__: true,
  },

  // Specifying Parser
  // By default, ESLint uses Espree as its parser. You can optionally specify that a different parser should be used in your configuration file
  // @typescript-eslint/parser - A parser that converts TypeScript into an ESTree-compatible form so it can be used in ESLint.
  // https://eslint.org/docs/user-guide/configuring#specifying-parser
  parser: '@typescript-eslint/parser',

  parserOptions: {
    // eslint-plugin-react
    ecmaFeatures: {
      jsx: true,
    },

    // @typescript-eslint/parser
    project: './tsconfig.json',

    // Specifying Parser Options
    // "module" if your code is in ECMAScript modules.
    // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
    sourceType: 'module',
  },

  plugins: [
    '@typescript-eslint', // @typescript-eslint/eslint-plugin
    'import', // eslint-plugin-import
    'jest', // eslint-plugin-jest
    'jsx-a11y', // eslint-plugin-jsx-a11y
    'prefer-arrow', // eslint-plugin-prefer-arrow
    'prettier', // eslint-plugin-prettier
    'react', // eslint-plugin-react
    'react-hooks', // eslint-plugin-react-hooks
  ],

  // Using Configuration Files
  // https://eslint.org/docs/user-guide/configuring#using-configuration-files-1
  root: true,

  rules: {
    // ESLint official
    'newline-before-return': 'error',
    'no-console': 'warn',
    'no-continue': 'off',
    'require-yield': 'error',
    // for react-app-env.d.ts (https://github.com/facebook/create-react-app/issues/6560)
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],

    // @typescript-eslint/eslint-plugin
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // eslint-plugin-prefer-arrow
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true, // Error if function is used anytime.
        singleReturnOnly: true, // Error for function declarations which only contain a return statement.
        classPropertiesAllowed: false, // Error about functions which could be replaced with arrow functions defined as class instance fields.
      },
    ],

    // eslint-plugin-react
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['jsx', 'tsx'],
      },
    ],
    'react/jsx-props-no-spreading': [
      'warn', // Prevent JSX prop spreading
      {
        custom: 'ignore',
      },
    ],
    'react/prop-types': 'off', // Prevent missing props validation in a React component definition
    // 'react/prefer-stateless-function': 'off', // Enforce stateless components to be written as a pure function

    // eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // eslint-plugin-import
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
  },
  settings: {
    // eslint-plugin-import
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },

    // eslint-plugin-react
    react: {
      version: 'detect',
    },
  },
};
