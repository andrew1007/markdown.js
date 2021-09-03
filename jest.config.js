module.exports = {
    "preset": "ts-jest",
    "testMatch": [
        "<rootDir>/src/**/__tests__/**/*.(spec|test).(j|t)s?(x)",
    ],
    "watchPlugins": [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname",
    ],
}
