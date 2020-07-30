import { combineReducers } from 'redux';
import page from './page';
import todos from './todos';

const reducers = combineReducers({ page, todos });

export default reducers;