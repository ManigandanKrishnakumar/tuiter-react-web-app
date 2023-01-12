/* eslint-disable no-undef */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off'
    }
};
