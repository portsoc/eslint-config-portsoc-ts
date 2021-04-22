module.exports = {

  extends: ['portsoc'],

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/recommended',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      parser: '@typescript-eslint/parser',
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
      rules: {
        'indent': ['off'],
        '@typescript-eslint/indent': ['error', 2],
        'no-shadow': ['off'],
        '@typescript-eslint/no-shadow': ['error'],
        'default-case': ['off'],
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'comma',
            requireLast: true,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
        }],
        'no-param-reassign': [0],
        'prefer-destructuring': [0],
        'no-else-return': [0],
        'no-console': [0],
        'no-continue': [0],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        'jsx-a11y/no-autofocus': [0],
        'no-cond-assign': ['error', 'except-parens'],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/prefer-default-export': [0],
        'import/extensions': [
          'error',
          'always',
          {
            ts: 'never',
            tsx: 'never',
            js: 'never',
            jsx: 'never',
          },
        ],
        'no-underscore-dangle': [0],
        'no-mixed-operators': [0],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        '@typescript-eslint/type-annotation-spacing': ['error', {
          before: false,
          after: true,
        }],
      },
    },
  ],
};
