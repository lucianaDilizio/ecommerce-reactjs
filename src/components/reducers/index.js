import { combineReducers } from 'redux';
import cart from './cartReducer';
import filter from './filterReducer';
import productsList from './productsListReducer';

export default combineReducers({ cart, filter, productsList });
