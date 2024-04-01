const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/src/test/jest.setup.ts', '<rootDir>/src/test/utils.tsx'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: 50,
        },
        './src/i18n/': {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
        './src/components/': {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
    },
    collectCoverageFrom: [
        '**/*.{ts,tsx}', // Include all TypeScript files
        '!**/node_modules/**', // Exclude node_modules
        '!**/.next/**', // Exclude .next
    ],
};

module.exports = createJestConfig(customJestConfig);
