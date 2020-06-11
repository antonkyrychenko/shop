import { createAsyncAction} from 'typesafe-actions';
import Product from '../../../models/product';
import ResponseObject from '../../../models/common/response-object';
import CatalogAction from './products.actions.enum';

export const getProductsAction = createAsyncAction(
    CatalogAction.GET_PRODUCTS_REQUEST,
    CatalogAction.GET_PRODUCTS_SUCCESS,
    CatalogAction.GET_PRODUCTS_FAILURE
)<undefined, Array<Product>, any>();