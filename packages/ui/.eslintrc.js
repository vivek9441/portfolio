module.exports = {
    root: true,
    extends: ["@bjornmelin/eslint-config"],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
    },
    ignorePatterns: ["dist/", "node_modules/", ".eslintrc.js"],
}
