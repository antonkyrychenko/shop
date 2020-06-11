import { createReducer } from 'typesafe-actions';
import Product from '../../models/product';
import { getProductsAction } from '../actions/catalog/products.actions';

export interface CatalogState {
    products: Product[] | null;
}

const initialState: CatalogState = {
    products: null
};

const catalogReducer = createReducer(initialState)
    .handleAction(getProductsAction.success, (state, action) => {
        return {
            ...state,
            products: action.payload
        }
    });

export default catalogReducer;
