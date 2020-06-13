import * as React from 'react';
import { Route, Switch } from 'react-router';
import ProductCatalogPage from '../pages/ProductCatalogPage/ProductCatalogPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';

export default () => (
    <Switch>
        <Route path={['/', '/order/:productId', '/checkout']} exact component={ProductCatalogPage} />
        <Route component={() => <div>There is no such page.</div>} />
    </Switch>
);
