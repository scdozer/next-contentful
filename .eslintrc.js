const prettierOptions = require('./.prettierrc.js');

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  // "extends": ["next/core-web-vitals"],
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    // always put prettier at last
    'prettier',
  ],
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'import/no-named-as-default': 0,
    'react/react-in-jsx-scope': 'off',
    // NextJs specific fix: allow jsx syntax in js files
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/display-name': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
  },
  settings: {
    'import/resolver': {
      alias: [
        ['components', './components'],
        ['contentful', './contentful'],
        ['context', './context'],
        ['lib', './lib'],
        ['pages', './pages'],
        ['public', './public'],
        ['styles', './styles'],
        ['utils', './utils'],
        ['modules', './modules'],
      ],
    },
  },
};
