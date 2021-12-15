import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import ProductsByCategory from '.././containers/Home/components/sort-by-category/index';
import { Cart } from '../containers/Home/components/cart';

const Content = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products-by-category" component={ProductsByCategory} />
                <Route exact path="/cart" component={Cart} />
                <Redirect to="/"/>
            </Switch>

        </>
    );
}

export default Content;
