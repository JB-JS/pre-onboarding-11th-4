import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global, css } from '@emotion/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const globalStyles = css`
  * {
    margin: 0;
    paddin: 0;
    box-sizing: border-box;
  }
`;

root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
);
