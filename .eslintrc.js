module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
    },
    "plugins": [
        "@typescript-eslint",
    ],
    "rules": {
        "no-var-requires": 0,
        "no-explicit-any": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-namespace": 0,
        "no-case-declarations": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "no-var": 0,
        "@typescript-eslint/adjacent-overload-signatures": 0,
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-empty-interface": 0,
        "no-prototype-builtins": 0,
        "no-empty-pattern": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "no-async-promise-executor": 0,
        "no-debugger": 1,
        "@typescript-eslint/semi": ['warn', 'never'],
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-unused-vars": [1, {
            "ignoreRestSiblings": true,
            "argsIgnorePattern": "^_",
        }],
    },
    globals: {
        "window": true,
        "module": true,
    },
}
