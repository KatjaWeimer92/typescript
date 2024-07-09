import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homework05 from './homework_05/Homework05';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <App />
    <Homework05/>
    </>
    
  </React.StrictMode>
);

reportWebVitals();
