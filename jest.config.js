/* eslint-disable no-undef */
/** @type {import('ts-jest').JestConfigWithTsJest} */
process.env.NODE_ENV = 'development';
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        }
    }
};