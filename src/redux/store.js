import { createStore } from 'redux';
import rootReducers from '../redux/reducers/RootReducers';

const store = createStore(rootReducers);

export default store;