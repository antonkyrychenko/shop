import * as React from 'react';
import { Route, Switch } from 'react-router';
import ProductCatalogPage from '../pages/ProductCatalogPage/ProductCatalogPage';
import OrderPage from '../pages/OrderPage/OrderPage';

export default () => (
    <Switch>
        <Route path={''} component={ProductCatalogPage} />
        <Route path={'/order'} component={OrderPage} />
    </Switch>
);
