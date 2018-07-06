import React, { Component } from 'react';
import {  Route } from 'react-router-dom';


import SongView from './../SongsView/SongsView.component'
import AlbumView from './../AlbumsView/AlbumView.component'
import LandingPage from './../AdminLandingPage/AdminLandingPage.component'
import PlaylistView from './../PlaylistView/PlaylistView.component'

import Navbar from './../Navbar/Navbar.component'

class AdminPage extends Component {

    render() {
        return (
            <div>
                <Navbar />
                Admin Page
                <Route path="/admin/" exact={true} component={LandingPage} />
                <Route path="/admin/songs" component={SongView} />
                <Route path="/admin/albums" component={AlbumView} />
                <Route path="/admin/playlists" component={PlaylistView} />

            </div>
        )
    }
}

export default AdminPage;