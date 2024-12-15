/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "./index.js",
    ],
    rules: {
        "@next/next/no-html-link-for-pages": "off",
        "react/react-in-jsx-scope": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
