import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Function to load Google Analytics script
const loadGoogleAnalytics = () => {
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-0BQBT5XYCC`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-0BQBT5XYCC');
  };
};

// Load Google Analytics script
loadGoogleAnalytics();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);