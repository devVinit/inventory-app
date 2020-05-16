import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ManageModelsPage from './ManageModels/ManageModelsPage';
import ModelProfilePage from './ModelProfile/ModelProfilePage';

const IndexRouter = () => (
    <Switch>
        <Route path="/manage-models" component={ManageModelsPage} />
        <Route path="/model-profile/:name" component={ModelProfilePage} />
        <Redirect from='*' to='/manage-models' />
    </Switch>
);

export default IndexRouter;