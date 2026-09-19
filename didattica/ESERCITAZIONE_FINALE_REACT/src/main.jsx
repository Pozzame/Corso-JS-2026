import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router';
import './index.css';
import App from './App.jsx';
import {LibreriaProvider} from './context/LibreriaContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LibreriaProvider>
        <App />
      </LibreriaProvider>
    </BrowserRouter>
  </StrictMode>
);
