module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 1,
    'react/no-unknown-property': 0,
    'no-console': 1,
    'react/prop-types': 1,
    'no-undef': 1,
    'react/require-default-props': 0,
    'no-async-promise-executor': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        semi: true,
        jsxSingleQuote: true,
        singleQuote: true,
        useTabs: false,
        tabWidth: 2,
        bracketSpacing: true,
        endOfLine: 'lf',
        tabSize: 2,
      },
    ],
  },
};
