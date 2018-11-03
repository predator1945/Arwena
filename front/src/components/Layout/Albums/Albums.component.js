import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from './Albums.actions'
import {playSong} from './../../Player/Player.actions'
import './albumsStyle.css'

class Albums extends Component {

    constructor(props) {
        super(props);
        this.playSong.bind(this)
    }

    componentWillMount() {
        this.props.fetchAlbums(this.props.location.pathname.split('/')[2]);
        console.log("xdd")
    }

    playSong(index) {
        console.log("xdd")
        console.log(index)
        this.props.playSong(this.props.album, index);
    }

    render() {
        return (
            <div>
                <div className="albums-container">
                    <img src={`http://192.168.99.100:5000/covers/${this.props.cover_id}.jpg`} />
                    <h2>{this.props.name}</h2>
                    <h3>{this.props.artist.name}</h3>
                </div>
                <table>
                    <tbody>
                    {this.props.songs.map((song, index) => {
                        return (
                            <tr
                                onClick={this.playSong.bind(this, index)}
                            >
                                <td className="song-content">
                                    <span 
                                    className="song-title"> {song.name || "Song 2"}</span>
                                    <span className="song-artist"> {!song.artist ? "Artist" : song.artist.name}</span>

                                </td>
                            </tr>
                        )
                    })}
                    </ tbody>
                </table>


            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log('state update')
    // console.log(state)
    return {
        ...state.albums,
        album: state.albums
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playSong: (album, no) => dispatch(playSong(album, no)),
        fetchAlbums: (id) => dispatch(fetchAlbums(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);