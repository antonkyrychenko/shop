import { combineEpics } from 'redux-observable';
import { Services } from '../services';
import { RootAction } from '../actions';
import { RootState } from '../reducers';
import * as catalogEpics from './catalog.epics';
import * as orderEpics from './order.epics';

export default combineEpics<RootAction, RootAction, RootState, Services>(
    ...Object.values(catalogEpics),
    ...Object.values(orderEpics),
);
