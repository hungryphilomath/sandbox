module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'semi': [
      'error',
      'always'
    ],
    'no-multiple-empty-lines': [
      'warn',
      {
        'max':  3
      }
    ],
    'prefer-const': [
      'error',
      {
        'destructuring': 'all'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  'overrides': [
    {
      'files': ['*.ts', '*.tsx'],
      'rules': {
        '@typescript-eslint/explicit-function-return-type': ['error']
      }
    }
  ]
};
