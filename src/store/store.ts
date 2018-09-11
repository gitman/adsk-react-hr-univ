// import * as redux from 'redux';
import { combineReducers, createStore } from 'redux';
import * as reducers from './reducers';

const store = createStore(combineReducers({...reducers}));
const dispatch = store.dispatch.bind(store);

// export default store;
export { dispatch, store };