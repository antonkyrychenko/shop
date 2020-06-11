import { combineReducers } from 'redux';
import history from '../history';
import { connectRouter } from 'connected-react-router';
import { StateType } from 'typesafe-actions';

const reducers = combineReducers({
    router: connectRouter(history)
});

export default reducers;

export type RootState = StateType<typeof reducers>;