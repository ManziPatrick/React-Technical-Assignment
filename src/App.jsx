import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Layout from './components/Layout';  
import Home from './pages/Home';  
import Mail from './pages/Mail';  
import Messages from './pages/Messages';  
import Settings from './pages/Settings';  
import Users from './pages/Users'; 

import { useTranslation } from 'react-i18next'; 
import './i18n'; 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { Provider } from 'react-redux';  
 import { store } from './store.js'; 

const queryClient = new QueryClient();

function App() {
  const { t } = useTranslation();  

  return (
    <Provider store={store}>  
      <QueryClientProvider client={queryClient}> 
        <Router>
          <Layout> 
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/mail" element={<Mail />} /> 
              <Route path="/messages" element={<Messages />} /> 
              <Route path="/settings" element={<Settings />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </Layout>
        </Router>
      </QueryClientProvider>
     </Provider>
  );
}

export default App;
