import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from './Albums.actions'
import './albumsStyle.css'

class Albums extends Component {

    componentWillMount() {
        this.props.fetchAlbums(this.props.location.pathname.split('/')[2]);
        console.log("xdd")
    }

    render() {
        return (
            <div>
                <div className="albums-container">
                    <img src={`http://192.168.99.100:5000/covers/${this.props.cover_id}.jpg`} />
                    <h2>{this.props.name}</h2>
                    <h3>{this.props.artist.name}</h3>
                </div>
                <div id="dsd"></div>
                <table>
                {this.props.songs.map(song => {
                    return (
                        <tr>
                            <td className="song-content">
                            <span className="song-title"> {song.name || "Song 2"}</span>
                             <span className="song-artist"> {!song.artist? "Artist": song.artist.name}</span>
                             
                             </td>
                        </tr>
                    )
                })}
                </table>
                

            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state update')
    console.log(state)
    return {
        ...this.props,
        ...state.albums,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAlbums: (id) => dispatch(fetchAlbums(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);