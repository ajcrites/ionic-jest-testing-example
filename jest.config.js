module.exports = {
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: '<rootDir>/src/setupJest.ts',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!@ionic)',
  ],
};
