import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { GlobalStyle } from 'styles/GlobalStyle';
// import { App } from 'components/App/App.jsx';
import { AppTemp } from 'temp/App/AppTemp.jsx';

import { store } from 'temp/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter basename="/react_starter">
      <Provider store={store}>
        {/* <App /> */}
        <AppTemp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
