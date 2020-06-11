import { createAsyncAction} from 'typesafe-actions';
import Product from '../../../models/product';
import ResponseObject from '../../../models/common/response-object';
import ProductsAction from './products.actions.enum';

export const getProductsAction = createAsyncAction(
    ProductsAction.GET_PRODUCTS_REQUEST,
    ProductsAction.GET_PRODUCTS_SUCCESS,
    ProductsAction.GET_PRODUCTS_FAILURE
)<string, Array<Product>, any>();