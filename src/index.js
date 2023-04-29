import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from 'styles/GlobalStyle';

import { App } from 'components/App/App.jsx';
import { Temp } from 'temp/App/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <Temp />
  </React.StrictMode>
);
