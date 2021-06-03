import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from '../routes';

function Content() {
    return (
        <Switch>
            {
                routes.map((route) => (
                    <Route path={route.path} render={props=> (<route.component {...props}/>)}/>
                ))
            }
        </Switch>
    );
}

export default Content;
