import '@testing-library/jest-dom';

jest.mock('$app/navigation.js', () => ({
  goto: jest.fn()
}));

jest.mock('$lib/common', () => ({
  envVars: {
    clientId: 'fake-client-id',
    redirectUrl: 'fake-redirect-url'
  }
}));
