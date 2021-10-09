import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux2/store';
import { Provider } from 'react-redux';
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';
import { persistStore } from 'redux-persist';
const persist = persistStore(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
    <App />
    </PersistGate>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
