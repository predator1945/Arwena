import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArtists } from './../Artists.actions'
import ListEntry from './ArtistsListEntry.component'

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

class ArtistView extends Component {


    componentDidMount() {
        this.props.fetchArtists();
    }

    displayList() {
        return this.props.artists.map(artist => (<ListEntry artist={artist} />))
    }


    render() {

        return (
            <div>
                <Typography variant="display2" gutterBottom>
                    Artists
                </Typography>

                <div>
                    <Grid container spacing={32}>
                        <Grid item xs={12} md={12}>
                            {/* {this.displayList()} */}
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    console.log(state)
    return {
        ...state
    }
}

const mapDispatchToProps = {
    fetchArtists,

}


export default connect(mapStateToProps, mapDispatchToProps)(ArtistView);