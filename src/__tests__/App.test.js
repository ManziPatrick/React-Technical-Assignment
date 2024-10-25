import React from 'react';
import { render, screen } from './test-utils';
import '@testing-library/jest-dom';
import App from '../App';

const mockComponents = {
  Layout: ({ children }) => (
    <div data-testid="mock-layout">
      <nav role="navigation">Navigation Bar</nav>
      <main>{children}</main>
    </div>
  ),
  Home: () => <div>Home Page</div>,
  Mail: () => <div>Mail Page</div>,
  Messages: () => <div>Messages Page</div>,
  Settings: () => <div>Settings Page</div>,
  Users: () => <div>Users Page</div>
};

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {})
    }
  }),
  initReactI18next: {
    type: '3rdParty',
    init: () => {}
  }
}));

jest.mock('../store', () => ({
  store: {
    getState: () => ({}),
    subscribe: () => {},
    dispatch: jest.fn()
  }
}));

jest.mock('../components/Layout', () => {
  return {
    __esModule: true,
    default: jest.fn(({ children }) => (
      <div data-testid="mock-layout">
        <nav role="navigation">Navigation Bar</nav>
        <main>{children}</main>
      </div>
    )),
  };
});

jest.mock('../pages/Home', () => ({
  __esModule: true,
  default: jest.fn(mockComponents.Home)
}));

jest.mock('../pages/Mail', () => ({
  __esModule: true,
  default: jest.fn(mockComponents.Mail)
}));

jest.mock('../pages/Messages', () => ({
  __esModule: true,
  default: jest.fn(mockComponents.Messages)
}));

jest.mock('../pages/Settings', () => ({
  __esModule: true,
  default: jest.fn(mockComponents.Settings)
}));

jest.mock('../pages/Users', () => ({
  __esModule: true,
  default: jest.fn(mockComponents.Users)
}));

describe('App Component', () => {
  const initialState = {
    todos: {
      items: [],
      status: 'idle',
      error: null
    }
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<App />, { preloadedState: initialState });
    expect(screen.getByTestId('mock-layout')).toBeInTheDocument();
  });

  it('renders navigation', () => {
    render(<App />, { preloadedState: initialState });
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders home route by default', () => {
    render(<App />, { preloadedState: initialState });
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
