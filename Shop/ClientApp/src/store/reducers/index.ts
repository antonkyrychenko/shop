import { combineReducers } from 'redux';
import history from '../history';
import { connectRouter } from 'connected-react-router';
import { StateType } from 'typesafe-actions';
import catalogReducer from './catalog.reducer';
import orderReducer from './order.reducer';

const reducers = combineReducers({
    router: connectRouter(history),
    catalog: catalogReducer,
    order: orderReducer,
});

export default reducers;

export type RootState = StateType<typeof reducers>;