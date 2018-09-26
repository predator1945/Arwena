import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';

import Layout from './../components/Layout/Layout.component'

const AppRouter = () => (


    <Router history={history}>
        <div>
            <Route path="/" exact={true} component={Layout} />
        </div>
    </Router>

);

export default AppRouter;
