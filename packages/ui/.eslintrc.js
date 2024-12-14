module.exports = {
    root: true,
    extends: ["../../packages/config/eslint-config"],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
    },
    ignorePatterns: ["dist/", "node_modules/", ".eslintrc.js"],
}
