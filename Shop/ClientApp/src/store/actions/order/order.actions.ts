import { createAsyncAction, createAction } from 'typesafe-actions';

import OrderAction from './order.actions.enum';
import Order from '../../../models/order';

export const createPaymentIntentAction = createAsyncAction(
    OrderAction.CREATE_PAYMENT_INTENT_REQUEST,
    OrderAction.CREATE_PAYMENT_INTENT_SUCCESS,
    OrderAction.CREATE_PAYMENT_INTENT_FAILURE
)<string, string, any>();

export const createOrderAction = createAsyncAction(
    OrderAction.CREATE_ORDER_REQUEST,
    OrderAction.CREATE_ORDER_SUCCESS,
    OrderAction.CREATE_ORDER_FAILURE
)<Order, undefined, any>();

export const updateOrder = createAction(OrderAction.UPDATE_ORDER)<Order>();