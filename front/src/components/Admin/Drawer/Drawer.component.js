import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import history from './../../../history'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AlbumIcon from '@material-ui/icons/Album';
import PlaylistIcon from '@material-ui/icons/QueueMusic';
import SongIcon from '@material-ui/icons/MusicNote';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

function DrawerComponent(props) {
    const { classes } = props;


    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}>

            <div className={classes.toolbar} />
            <DrawerMenu />
        </Drawer>
    )
}


Drawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerComponent);


const stylesForList = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

function DrawerMenuComponent(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItem button
                onClick={() => history.push("/admin/albums")}
                >
                    <ListItemIcon>
                        <AlbumIcon />
                    </ListItemIcon>
                    <ListItemText primary="Albums" />
                </ListItem>
                <ListItem button
                onClick={() => history.push("/admin/playlists")}
                >
                    <ListItemIcon>
                        <PlaylistIcon />
                    </ListItemIcon>
                    <ListItemText primary="Playlist" />
                </ListItem>
                <ListItem button
                onClick={() => history.push("/admin/songs")}
                >
                    <ListItemIcon>
                        <SongIcon />
                    </ListItemIcon>
                    <ListItemText primary="Songs" />
                </ListItem>
            </List>
            <Divider />

        </div>
    );
}

DrawerMenuComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

const DrawerMenu = withStyles(stylesForList)(DrawerMenuComponent);