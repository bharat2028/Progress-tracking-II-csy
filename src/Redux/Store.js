import { createStore } from 'redux';
import counterReducer from './Reducer';
// Create Redux store
const store = createStore(counterReducer);
export default store;