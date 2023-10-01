import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import App from './App';
import ScrollTop from './components/ScrollTop';

const TRACKING_ID = process.env.REACT_APP_GOOGLE_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop>
        <App />
      </ScrollTop>
    </BrowserRouter>
  </React.StrictMode>,
);
