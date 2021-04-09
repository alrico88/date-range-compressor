module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coveragePathIgnorePatterns: ['/node_modules/', '/src/documents/repositories/', '/src/services/'],
    transform: {
        '/src/services/': 'ts-jest',
        '/src/documents/repositories/': 'ts-jest',
        '/src/helpers/': 'ts-jest',
    },
};
