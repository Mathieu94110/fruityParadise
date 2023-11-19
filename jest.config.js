module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest.setupFilesAfterEnv.ts'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
  ],
  roots: ['./__tests__'],
  modulePaths: ['./'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
    'tests/(.*)': '<rootDir>/__tests__/$1',
  },
  moduleDirectories: ['node_modules'],
  injectGlobals: true,
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
};
