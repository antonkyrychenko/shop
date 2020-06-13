import { createReducer } from 'typesafe-actions';
import { createPaymentIntentAction, updateOrder, createOrderAction } from '../actions/order/order.actions';
import Order from '../../models/order';

export interface OrderState {
    clientSecret: string | null;
    order: Order | null;
}

const initialState: OrderState = {
    clientSecret: null,
    order: null
};

const orderReducer = createReducer(initialState)
    .handleAction(createPaymentIntentAction.success, (state, action) => {
        return {
            ...state,
            clientSecret: action.payload
        }
    })
    .handleAction(updateOrder, (state, action) => {
        return {
            ...state,
            order: action.payload
        }
    })
    .handleAction(createOrderAction.success, (state, action) => {
        return {
            ...state,
            order: null
        }
    });
export default orderReducer;
