module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 12,
        "sourceType": "module",
    },
    "plugins": [
        "react",
        "@typescript-eslint",
    ],
    "rules": {
        "no-var-requires": 0,
        "no-explicit-any": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-namespace": 0,
        "@typescript-eslint/ban-types": [1, {
            "types": {
                "Function": false,
            },
        }],
        "no-case-declarations": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "no-var": 0,
        "@typescript-eslint/adjacent-overload-signatures": 0,
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/no-var-requires": 0,
        "react/prop-types": 0,
        "@typescript-eslint/no-empty-interface": 0,
        "no-prototype-builtins": 0,
        "react/react-in-jsx-scope": 0,
        "no-empty-pattern": 0,
        "react/no-unescaped-entities": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "no-async-promise-executor": 0,
        "@typescript-eslint/no-unused-vars": [1, {
            "ignoreRestSiblings": true,
            "argsIgnorePattern": "^_",
        }],
        "no-debugger": 1,
        "@typescript-eslint/semi": ['warn', 'never'],
        "@typescript-eslint/comma-dangle": ["warn", "always-multiline"],
    },
    globals: {
        "window": true,
        "module": true,
    },
}
