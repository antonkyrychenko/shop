import { Epic } from "redux-observable";
import { RootAction } from "../actions";
import { RootState } from "../reducers";
import { Services } from "../services";
import { from, of } from 'rxjs';
import { isActionOf } from "typesafe-actions";
import { catchError, filter, mergeMap, switchMap } from 'rxjs/operators';
import { getProductsAction } from "../actions/catalog/products.actions";

export const GetProductsEpic: Epic<RootAction, RootAction, RootState, Services> =
    ((action$, state$, { api }) => action$.pipe(filter(isActionOf(getProductsAction.request)),
        switchMap(action => from(api.productService.getProducts()).pipe(
            mergeMap(response => of(getProductsAction.success(response.data))),
            catchError(error => of(getProductsAction.failure(error)))))));