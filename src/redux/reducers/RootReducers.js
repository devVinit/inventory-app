import { combineReducers } from 'redux';
import models from './ModelReducer';
import inventories from './InventoryReducers';

export default combineReducers({
    models, 
    inventories
});