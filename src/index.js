import React from 'react';
import ReactDOM from 'react-dom/client'; // Keep only this one
import { ParallaxProvider } from "react-scroll-parallax";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParallaxProvider>  
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);

// We can use this for measuring performance in the future - just leaving it here.
reportWebVitals();
