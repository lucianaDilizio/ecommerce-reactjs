import { combineReducers } from 'redux';
import cart from './cartReducer';
import filter from './filterReducer';

export default combineReducers({ cart, filter });
