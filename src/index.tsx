import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
