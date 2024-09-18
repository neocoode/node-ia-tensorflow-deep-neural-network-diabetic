module.exports = {
  preset: 'ts-jest',
  displayName: 'test',
  testEnvironment: 'node',
  collectCoverage: false,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  coverageReporters: ['json', 'lcov', 'text-summary', 'clover', 'cobertura'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/node_modules/'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
};
