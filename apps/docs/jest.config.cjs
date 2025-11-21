module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
    transform: {
        '^.+\\.(js|mjs|cjs|ts|tsx|jsx)$': 'babel-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};
