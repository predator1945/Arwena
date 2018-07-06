import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import LandingPage from './../components/LandingPage/LandingPage.component'
import AdminPage from './../components/Admin/AdminPage/AdminPage.component'

const AppRouter = () => (


    <Router history={history}>
        <div>
                <Route path="/" exact={true} component={LandingPage} />
                <Route path="/admin" component={AdminPage} />
        </div>
    </Router>

);

export default AppRouter;
