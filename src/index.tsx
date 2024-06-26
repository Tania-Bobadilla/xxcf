import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import AppRoutes from './components/routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom'
import "./components/styles/tailwind.css"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


