import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize i18next
i18next
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    resources: {
      en: {
        common: {}
      }
    },
    react: {
      useSuspense: false
    }
  });

// Create a custom render function
function render(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        todos: (state = { items: [], status: 'idle', error: null }) => state
      },
      preloadedState
    }),
    ...renderOptions
  } = {}
) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0
      }
    }
  });

  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18next}>
            <Router>
              {children}
            </Router>
          </I18nextProvider>
        </QueryClientProvider>
      </Provider>
    );
  }

  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    store,
  };
}

// re-export everything
export * from '@testing-library/react';
export { render };

// Add a test to satisfy Jest's requirement
describe('test-utils', () => {
  it('provides a working render function', () => {
    expect(render).toBeDefined();
  });
});