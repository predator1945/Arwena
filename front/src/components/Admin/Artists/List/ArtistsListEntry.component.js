import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class ArtistListEntry extends Component {


    render() {

        return (
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Single-line item"
                    secondary={'Secondary text'}
                />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Edit">
                        <EditIcon />
                    </IconButton>

                    <IconButton aria-label="Delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}


export default ArtistListEntry;