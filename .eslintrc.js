const { eslint } = require('@coko/lint')

eslint.ignorePatterns.push('node_modules')

eslint.rules['import/no-extraneous-dependencies'][1].devDependencies.push(
  '**/test/**/*.js',
)

eslint.rules['react/jsx-props-no-spreading'] = 0

eslint.rules['padding-line-between-statements'] = [
  'error',
  { blankLine: 'always', prev: '*', next: 'block' },
  { blankLine: 'always', prev: 'block', next: '*' },
  { blankLine: 'always', prev: '*', next: 'block-like' },
  { blankLine: 'always', prev: 'block-like', next: '*' },
  { blankLine: 'always', prev: '*', next: 'multiline-const' },
  { blankLine: 'always', prev: 'multiline-const', next: '*' },
  { blankLine: 'always', prev: '*', next: 'multiline-expression' },
  { blankLine: 'always', prev: 'multiline-expression', next: '*' },
  // { blankLine: 'always', prev: '*', next: 'export' },
  // { blankLine: 'always', prev: 'export', next: '*' },
]

eslint.rules['react/prop-types'][1].ignore.push('data-test-id')
eslint.rules['react/prop-types'][1].ignore.push('innerRef')
eslint.rules['react/prop-types'][1].ignore.push('onBlur')

// eslint.rules['react/jsx-newline'] = 1
eslint.rules['react/jsx-no-useless-fragment'] = 1

module.exports = eslint
