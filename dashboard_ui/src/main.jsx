import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.jsx';
import Homepage from './components/Homepage.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import TermsPolicy from './components/TermsPolicy.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path='/homepage' element={<Homepage />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
