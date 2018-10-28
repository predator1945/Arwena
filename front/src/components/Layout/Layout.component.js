import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation.component'
import Player from './../Player/Player.component'
import { Route } from 'react-router-dom';
import Collections from './Collections/Collections.component'
import Albums from './Albums/Albums.component'

class Layout extends Component {

    render() {
        return (
            <div>

                <div className="container">
                    <div className="content">
                        <Route path="/" exact={true} component={Collections} />
                        <Route path="/albums"  component={Albums} />
                    </div>
                        <Player />
                    <div className="spacer" /> 
                    <div className="navigation">
                        <Navigation />
                    </div>
                </div>


            </div>
        )
    }


}

export default Layout;