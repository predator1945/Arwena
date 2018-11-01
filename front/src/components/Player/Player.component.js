import React, { Component } from 'react';
import { connect } from 'react-redux'
import './playerStyle.css'
class Player extends Component {

    constructor(props) {
        super(props);

        this.music = React.createRef();
    }

    playMusic(source) {
        if (!this.props.album.songs) return;

        if (source == 'button') {
            if (this.music.current.paused) {
                this.music.current.play()
                document.getElementById('playBtn').innerText = "pause"
            } else {
                this.music.current.pause()
                document.getElementById('playBtn').innerText = "play_arrow"
            }
        }

        this.music.current.pause()

        this.music.current.load()
        this.music.current.play()

        document.getElementById('playBtn').innerText = "pause"
    }

    componentDidUpdate() {
        this.playMusic("state");

    }

    renderControls() {
        if (!this.props.album.songs) return;
        return (
            <div className="player-controls">

                <i class="material-icons">skip_previous</i>

                <i class="material-icons"
                    id={"playBtn"}
                    onClick={this.playMusic.bind(this, "button")}
                >play_arrow</i>
                
                <i class="material-icons">skip_next</i>
            </div>
        )
    }

    render() {
        const song = this.props.album.songs ? this.props.album.songs[this.props.no].stream_url : ""

        return (
            <div className="player">
                <audio id="music" ref={this.music} controls>
                    <source
                        src={this.props.album.artist ?
                            `http://192.168.99.100:3004/songs/${song}` : ""}
                        type="audio/mp3" />
                </audio>
                <div className="player-cover">

                    {!this.props.album.cover_id ? "" :
                        <img src={`http://192.168.99.100:5000/covers/${this.props.album.cover_id}.jpg`} />
                    }
                </div>
                <div className="player-data">
                    <div className="player_album-title">
                        {this.props.album.songs ? this.props.album.songs[this.props.no].name : ""}
                    </div>
                    <div className="player_album-artist">
                        {this.props.album.artist ? this.props.album.artist.name : ""}
                    </div>


                </div>

                {this.renderControls()}





            </div >
        )
    }


}


const mapStateToProps = (state) => {
    return {
        ...state.player
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
