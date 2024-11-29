import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  prettier,
  eslintPluginPrettier,
  {
    // languageOptions: {
    //   parserOptions: {
    //     parser: "@typescript-eslint/parser",
    //     project: './tsconfig.json',
    //     projectService: true,
    //     tsconfigRootDir: import.meta.dirname,
    //   },
    // },
    ignores: ['dist', '*.config.mjs'],
    files: ['src/**/*.ts']
  }
)
