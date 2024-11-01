// eslint.config.js
import eslintPluginPrettier from 'eslint-plugin-prettier';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';

export default [
	{
		files: ['**/*.ts', '**/*.js'], // Указываем файлы, к которым будут применяться правила
		plugins: {
			'@typescript-eslint': typescriptEslintPlugin,
			prettier: eslintPluginPrettier,
		},
		languageOptions: {
			parser: typescriptEslintParser, // Указываем парсер для TypeScript
		},
		rules: {
			'@typescript-eslint/ban-types': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/explicit-function-return-type': 'warn',
			'prettier/prettier': [
				'error',
				{
					singleQuote: true,
					useTabs: true,
					semi: true,
					trailingComma: 'all',
					bracketSpacing: true,
					printWidth: 100,
					endOfLine: 'auto',
				},
			],
		},
	},
];
