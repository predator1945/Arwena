import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
        width: "80%"
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
});

class SongsView extends Component {

    uploadFile() {
        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        formData.append("file", imagefile.files[0]);
        axios.post('http://localhost:5000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    render() {

        const { classes } = this.props;

        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Songss
                </Typography>
                <TextField
                    id="uncontrolled"
                    label="Search"
                    defaultValue=""
                    margin="normal"
                />

                <div className={classes.demo} >
                    <List dense={true}>

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Single-line item"
                                secondary='Secondary text'
                            />
                            <ListItemSecondaryAction>
                                <IconButton aria-label="Delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>

                    </List>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SongsView);
