import React, { Component } from 'react';

import history from './../../history'
class LandingPage extends Component {

    render() {
        return (
            <div>
                Landing Page
                <button
                    onClick={history.push("/admin")}
                >
                    admin</button>
            </div>
        )
    }


}

export default LandingPage;