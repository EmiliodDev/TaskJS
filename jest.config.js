module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    modulePaths: ['<rootDir>/server', '<rootDir>/tests'],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/server/$1',
    },
};
