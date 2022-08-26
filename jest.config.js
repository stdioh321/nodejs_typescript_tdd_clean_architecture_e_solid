module.exports = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src'],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$' : 'ts-jest'
  }
};

