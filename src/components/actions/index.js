import cartActions from './cartActions';
import filtersActions from './filtersActions';
import productsListActions from './productsListActions';

//Cart actions
export const addToCart = cartActions.addToCart;
export const removeFromCart = cartActions.removeFromCart;
export const updateAmount = cartActions.updateAmount;

//Filter actions
export const updateFilter = filtersActions.updateFilter;

//ProductList actions
export const getProducts = productsListActions.getProducts;
