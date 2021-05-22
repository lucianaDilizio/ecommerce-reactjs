import React from 'react';
import './App.css';
import { ECommerce } from './components/ECommerce/ECommerce';
import { createStore, applyMiddleware, compose} from 'redux';
import reducers from './components/reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

function App() {
  return (
    <Provider store={store}>
      <ECommerce />
    </Provider>
  );
}

export default App;
