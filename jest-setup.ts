import '@testing-library/jest-dom';

global.mockGoto = jest.fn();
jest.mock('$app/navigation.js', () => ({
  goto: global.mockGoto
}));

jest.mock('$lib/common', () => ({
  envVars: {
    clientId: 'fake-client-id',
    redirectUrl: 'fake-redirect-url'
  }
}));
