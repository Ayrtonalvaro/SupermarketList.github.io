module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settigs: {
		react: {
			version:'detect'
		}
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'standard',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {},
};
