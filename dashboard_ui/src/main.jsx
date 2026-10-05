import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QuoteProvider } from './components/QuoteContext.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
        <QuoteProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<App />}/>
                <Route path='/dashboard' element={<Dashboard />}/>
              </Routes>
            </BrowserRouter>
        </QuoteProvider>
      </QueryClientProvider>
      
  </StrictMode>
)
