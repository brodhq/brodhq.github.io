module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            diagnostics: false,
            tsconfig: './tsconfig.json',
            isolatedModules: true,
        },
    },
    roots: ['packages/'],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    watchPathIgnorePatterns: [`node_modules`],
    testPathIgnorePatterns: [],
    reporters: ['default'],
    transform: {},
}
