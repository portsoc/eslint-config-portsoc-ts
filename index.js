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
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        'no-cond-assign': ['error', 'except-parens'],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
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
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        '@typescript-eslint/type-annotation-spacing': ['error', {
          before: false,
          after: true,
        }],
      },
    },
  ],
};
