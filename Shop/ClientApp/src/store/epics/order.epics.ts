import { Epic, ofType } from "redux-observable";
import { RootAction } from "../actions";
import { RootState } from "../reducers";
import { Services } from "../services";
import { from, of } from 'rxjs';
import { isActionOf } from "typesafe-actions";
import { catchError, filter, mergeMap, switchMap } from 'rxjs/operators';
import { createPaymentIntentAction, createOrderAction } from "../actions/order/order.actions";
import { push } from "connected-react-router";
import OrderAction from "../actions/order/order.actions.enum";

export const CreatePaymentIntentEpic: Epic<RootAction, RootAction, RootState, Services> =
    ((action$, state$, { api }) => action$.pipe(filter(isActionOf(createPaymentIntentAction.request)),
        switchMap(action => from(api.paymentIntentService.createPaymentIntent(action.payload, window.location.toString(), window.location.origin.toString())).pipe(
            mergeMap(response => of(createPaymentIntentAction.success(response.data))),
            catchError(error => of(createPaymentIntentAction.failure(error)))))));

export const userLoginSuccessEpic: Epic<any> = ($action, $state) => $action.pipe(
    filter(isActionOf(createPaymentIntentAction.success)),
    switchMap(() => of(push(`/checkout`)))
);

export const CreateOrderEpic: Epic<RootAction, RootAction, RootState, Services> =
    ((action$, state$, { api }) => action$.pipe(filter(isActionOf(createOrderAction.request)),
        mergeMap(action => from(api.orderService.createOrder(action.payload)).pipe(
            mergeMap(response => of(createOrderAction.success())),
            catchError(error => of(createOrderAction.failure(error)))))));