/* eslint-disable @typescript-eslint/no-require-imports */
const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })
module.exports = createJestConfig({
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
})
