module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'ts-jest',
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: './svelte.config.test.cjs'
      }
    ],
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  moduleNameMapper: {
    '^\\$lib(.*)$': '<rootDir>/src/lib$1',
    '^\\$app(.*)$': [
      '<rootDir>/.svelte-kit/dev/runtime/app$1',
      '<rootDir>/.svelte-kit/build/runtime/app$1'
    ]
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  // Set collectCoverage to false for now since setting this to true gives an [ERR_IVALID_ARG_TYPE] error.
  // This is a known issue: https://github.com/mihar-22/svelte-jester/issues/72
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts,svelte}', '!**/node_modules/**']
};
