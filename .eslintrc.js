module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
	},
	globals: {
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			experimentalDecorators: true,
			legacyDecorators: true,
			jsx: true,
			modules: true,
		},
	},
	parser: 'babel-eslint',
	plugins: ['react'],
	rules: {
		'comma-dangle': ['error', 'always-multiline'],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': [
			'error',
			process.platform === 'win32' ? 'windows' : 'unix',
		],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		strict: [2, 'never'],
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars': 2,
		'react/react-in-jsx-scope': 2,
		'react/no-multi-comp': 2,
		'react/no-typos': 2,
		'react/no-string-refs': 2,
		'react/require-render-return': 2,
		'react/prefer-es6-class': 2,
		'react/prefer-stateless-function': 0,
		'react/sort-comp': 2,
		'react/sort-prop-types': 2,
		'no-unexpected-multiline': 'error',
		curly: 'error',
		'react/jsx-pascal-case': 2,
		'react/jsx-props-no-multi-spaces': 2,
		'react/no-unused-state': 2,
		'react/require-default-props': 2,
		'react/prop-types': ['error'],
	},
}