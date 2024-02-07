module.exports = {
	extends: [
    'plugin:react/recommended',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:no-unsanitized/DOM',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	rules: {
		'react/jsx-filename-extension': [0],
		'import/extensions': 0,
		'import/no-extraneous-dependencies': 0,
		'@typescript-eslint/no-misused-promises': 0,
		'@typescript-eslint/no-empty-function': 0,
	},
}
