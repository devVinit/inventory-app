import { combineReducers } from 'redux';
import models from './ModelReducer';
import inventories from './InventoryReducers';
import sideMenuBar from './SideMenuReducer';

export default combineReducers({
    models,
    inventories,
    sideMenuBar
});