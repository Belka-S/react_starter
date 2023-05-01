import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from 'styles/GlobalStyle';
import { App } from 'components/App/App.jsx';
import { AppHook } from 'tempHook/App/App.jsx';
// import { AppClass } from 'tempClass/App/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <AppHook />
    {/* <AppClass /> */}
  </React.StrictMode>
);
