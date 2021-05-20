import React from 'react';
import './App.css';
import { ECommerce } from './components/ECommerce/ECommerce';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './components/reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <ECommerce />
    </Provider>
  );
}

export default App;
