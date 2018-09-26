import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation.component'


class Layout extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="content">

                    </div>
                    <div className="player">
                    </div>
                    <div className="navigation">
                        <Navigation />
                    </div>
                </div>


            </div>
        )
    }


}

export default Layout;