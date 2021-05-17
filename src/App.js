import React from 'react';
import './App.css';
import { ECommerce } from './components/ECommerce/ECommerce';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './components/reducers';

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <ECommerce />
    </Provider>
  );
}

export default App;
