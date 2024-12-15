/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: ["../../packages/config/eslint-config/next"],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
    },
    settings: {
        next: {
            rootDir: __dirname,
        },
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            parser: "@typescript-eslint/parser",
        },
    ],
};
