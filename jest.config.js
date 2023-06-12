module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['./jest.env.js'],
  transform: {
    '^.+\\.js$': '@swc/jest',
  },
};
