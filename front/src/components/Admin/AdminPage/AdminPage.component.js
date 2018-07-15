import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import SongView from './../Songs/ListSongs.component'
import AddSong from './../Songs/AddSong.component'

import AlbumView from './../AlbumsView/AlbumView.component'
import LandingPage from './../AdminLandingPage/AdminLandingPage.component'
import PlaylistView from './../PlaylistView/PlaylistView.component'
import Navbar from './../Navbar/Navbar.component'
import Drawer from './../Drawer/Drawer.component'
import ArtistView from './../Artists/ArtistsView.component';
import AddArtist from '../Artists/AddArtist.component';

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

function AdminPage(props) {

    const { classes } = props;

    return (

        <div className={classes.root}>
            <Navbar />
            <Drawer />

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Route path="/admin/" exact={true} component={LandingPage} />
                <Route path="/admin/songs" exact={true} component={SongView} />
                <Route path="/admin/songs/add" component={AddSong} />
                <Route path="/admin/albums" component={AlbumView} />
                <Route path="/admin/playlists" component={PlaylistView} />
                <Route path="/admin/artists/add" component={AddArtist} />
                <Route path="/admin/artists" exact={true} component={ArtistView} />
            </main>

        </div>

    )
}

AdminPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminPage);