import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { GlobalStyle } from 'styles/GlobalStyle';
// import { App } from 'components/App/App.jsx';
import { AppTemp } from 'temp/App/AppTemp.jsx';

import { store, persistor } from 'temp/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/react_starter">
          {/* <App /> */}
          <AppTemp />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
