import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import LandingPage from './../components/LandingPage/LandingPage.component'

const AppRouter = () => (


    <Router history={history}>
        <div>
                <Route path="/" exact={true} component={LandingPage} />
        </div>
    </Router>

);

export default AppRouter;
