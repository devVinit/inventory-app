import { createStore } from 'redux';
import rootReducers from '../redux/reducers/RootReducers';
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();

const store = createStore(rootReducers, persistedState);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;