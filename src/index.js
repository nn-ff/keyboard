import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import ScrollToTop from './components/ScrollToTop';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ScrollToTop />
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);
