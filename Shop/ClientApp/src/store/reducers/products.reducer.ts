import { createReducer } from 'typesafe-actions';
import Product from '../../models/product';
import { getProductsAction } from '../actions/products/products.actions';

export interface ProductsState {
    products: Product[];
}

const initialState: ProductsState = {
    products: []
};

const userReducer = createReducer(initialState)
    .handleAction(getProductsAction.success, (state, action) => {
        return {
            ...state,
            products: action.payload
        }
    });

export default userReducer;
