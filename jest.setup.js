import '@testing-library/jest-dom';
import './src/__mocks__/i18nMock';

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};