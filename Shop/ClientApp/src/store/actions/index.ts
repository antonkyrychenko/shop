import { routerActions } from 'connected-react-router';
import { ActionType } from 'typesafe-actions';
import * as productActions from './catalog/products.actions';
import * as orderActions from './order/order.actions';

const actions = {
    router: routerActions,
    products: productActions,
    order: orderActions,
};

export default actions;

export type RootAction = ActionType<typeof actions>;