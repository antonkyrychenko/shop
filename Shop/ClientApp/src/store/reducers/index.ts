import { combineReducers } from 'redux';
import history from '../history';
import { connectRouter } from 'connected-react-router';
import { StateType } from 'typesafe-actions';
import catalogReducer from './catalog.reducer';

const reducers = combineReducers({
    router: connectRouter(history),
    catalog: catalogReducer
});

export default reducers;

export type RootState = StateType<typeof reducers>;