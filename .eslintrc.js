module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest': true
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
    '@typescript-eslint',
  ],
  'rules': {
    'arrow-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    'no-multiple-empty-lines': [
      'warn',
      {
        'max':  3
      }
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'prefer-const': [
      'error',
      {
        'destructuring': 'all'
      }
    ],
    'semi': [
      'error',
      'always'
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
