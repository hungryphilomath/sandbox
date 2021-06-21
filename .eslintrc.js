module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest': true,
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
    'no-autofix'
  ],
  'rules': {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'arrow-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    'indent': [
      'error',
      'tab',
      {
        'SwitchCase': 1
      }
    ],
    'no-autofix/prefer-const': 'error',
    'no-multiple-empty-lines': [
      'warn',
      {
        'max':  3
      }
    ],
    'no-unused-vars': [
			'warn'
		],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    // 'prefer-const': 'off',
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
    'sort-imports': 'error',
		'sort-keys': [
			'error',
			'asc'
		]
  },
  'overrides': [
    {
      'files': ['*.ts', '*.tsx'],
      'rules': {
        '@typescript-eslint/explicit-function-return-type': ['error']
      }
    },
    {
			'files': ['*.d.ts'],
			'rules': {
				'no-unused-vars': 0
			}
		},
    {
			'files': ['*[!.test].js'],
			'rules': {
				'indent': 0,
				'@typescript-eslint/explicit-module-boundary-types': 0
			}
		}
  ]
};
