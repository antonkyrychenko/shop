import { routerActions } from 'connected-react-router';
import { ActionType } from 'typesafe-actions';
import * as productActions from './products/products.actions';

const actions = {
    router: routerActions,
    products: productActions
};

export default actions;

export type RootAction = ActionType<typeof actions>;