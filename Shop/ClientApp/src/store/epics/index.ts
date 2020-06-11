import { combineEpics } from 'redux-observable';
import { Services } from '../services';
import { RootAction } from '../actions';
import { RootState } from '../reducers';

export default combineEpics<RootAction, RootAction, RootState, Services>(

);
