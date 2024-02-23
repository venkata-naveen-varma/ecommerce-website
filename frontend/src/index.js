import React from 'react';
import ReactDOM from 'react-dom/client';
// default bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// custom bootstrap theme
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
