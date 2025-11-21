module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.cjs"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testMatch: ["<rootDir>/tests/**/*.test.(ts|tsx|js)"]
};