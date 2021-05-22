import { combineReducers } from 'redux';
import cart from './cartReducer';
import filter from './filterReducer';
import products from './productsListReducer';

export default combineReducers({ cart, filter, products });
