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
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';


import ListSubheader from '@material-ui/core/ListSubheader';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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
            {/* <DrawerMenu /> */}
            <NestedListXd />

        </Drawer>
    )
}


Drawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerComponent);

const stylesForNestedList = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class NestedList extends React.Component {
    state = {
        openSongs: false,
        openAlbums: true,
        openPlaylists: true,
    };

    handleClick = (menuItem) => {
        switch (menuItem) {
            case "songs":
                this.setState(state => ({ openSongs: !state.openSongs }));
                break;
            case "playlists":
                this.setState(state => ({ openPlaylists: !state.openPlaylists }));
                break;
            case "albums":
                this.setState(state => ({ openAlbums: !state.openAlbums }));
                break;
        }
    };

    render() {
        const { classes } = this.props;

        console.log(history.location.pathname);
        return (
            <div className={classes.root}>
                <List
                    component="nav"
                    subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
                >


                    <ListItem button
                        onClick={() => {
                            history.push("/admin/albums")
                        }}>
                        <ListItemIcon>
                            <AlbumIcon />
                        </ListItemIcon>
                        <ListItemText primary="Albums" />
                        {this.state.openSongs ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={history.location.pathname == '/admin/albums'} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>

                                <ListItemText inset primary="Add" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button
                        onClick={() => {
                            history.push("/admin/playlists")
                        }}>
                        <ListItemIcon>
                            <PlaylistIcon />
                        </ListItemIcon>
                        <ListItemText primary="Playlists" />
                        {this.state.openSongs ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={history.location.pathname == '/admin/playlists'} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>

                                <ListItemText inset primary="Add" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button
                        onClick={() => {
                            history.push("/admin/songs")
                        }}>
                        <ListItemIcon>
                            <SongIcon />
                        </ListItemIcon>
                        <ListItemText primary="Songs" />
                        {this.state.openSongs ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={history.location.pathname == '/admin/songs'} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}
                                onClick={() => {
                                    history.push("/admin/songs/add")
                                }}                          >

                                <ListItemText inset primary="Add" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>
        );
    }
}

NestedList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const NestedListXd = withStyles(stylesForNestedList)(NestedList);