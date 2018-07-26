import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArtists, fetchedArtists } from './../Artists.actions'
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
        // this.props.dispatch(this.props.fetchArtists());
        this.props.fetchArtists()
        // this.props.fetchedArtists([{name:'xddd'}, {name: 'xddd'}])
    }

    displayList() {
        // console.log(this.props)
        if(!this.props.admin.artists || this.props.admin.artists.length === 0) return (<div>Nothing to display </div>)
        return this.props.admin.artists.map(artist => (<ListEntry
             artist={artist}
              />))
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
                            {this.displayList()}
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
    fetchedArtists
}


export default connect(mapStateToProps, mapDispatchToProps)(ArtistView);