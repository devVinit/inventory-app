import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ManageModelsPage from './ManageModels/InventoryProfilePage';
import InventoryProfilePage from './InventoryProfile/InventoryProfilePage';

const IndexRouter = () => (
    <Switch>
        <Route path="/manage-models" component={ManageModelsPage} />
        <Route path="/inventory-profile/:id" component={InventoryProfilePage} />
        <Redirect from='*' to='/manage-models' />
    </Switch>
);

export default IndexRouter;