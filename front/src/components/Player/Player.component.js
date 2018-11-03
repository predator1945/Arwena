import React, { Component } from 'react';
import { connect } from 'react-redux'
import './playerStyle.css'
import { playNext, playPrev, setProgress } from './Player.actions';

class Player extends Component {

    constructor(props) {
        super(props);

        this.music = React.createRef();
    }

    playMusic(source) {
        // console.log("state: " + this.music.current.paused)
        if (!this.props.album.songs) return;

        // console.log(source)

        if (source == 'button') {

            if (this.music.current.paused) {
                this.music.current.play()
                document.getElementById('playBtn').innerText = "pause"
            } else {
                this.music.current.pause()
                document.getElementById('playBtn').innerText = "play_arrow"
            }
        } else {
            this.music.current.pause()

            this.music.current.load()
            this.music.current.play()

            document.getElementById('playBtn').innerText = "pause"
        }
        this.music.current.ontimeupdate = e => {
            const { currentTime, duration } = this.music.current

            const {progress, setProgress} = this.props;
            let currentProgress = (currentTime / duration)*300 + "";
            currentProgress = currentProgress.split('.')[0] / 3;
            if(currentProgress != progress) 
            setProgress(currentProgress);

        }
    }

    playNext() {
        if (this.props.no + 1 >= this.props.album.songs.length) return;
        console.log(this.props.no + 1)

        this.props.playNext(this.props.no + 1);
        this.playMusic();
    }
    playPrev() {

    }

    componentDidUpdate() {
        const {currentSrc} = this.music.current

        if(currentSrc.split('/')[currentSrc.split('/').length-1] != this.props.album.songs[this.props.no].stream_url)
        this.playMusic("state");
    }


    renderProgressBar() {
        return (
            <React.Fragment>
            <div className="player-progressbar" />
            <div className="player-progressbar-progress"  style={{width:`${this.props.progress}vw` }}/>
            </React.Fragment>
            
        )
    }

    renderControls() {
        if (!this.props.album.songs) return;
        return (
            <div className="player-controls">

                <i className="material-icons">skip_previous</i>

                <i className="material-icons"
                    id={"playBtn"}
                    onClick={this.playMusic.bind(this, "button")}
                >play_arrow</i>

                <i
                    onClick={this.playNext.bind(this)}
                    className="material-icons">skip_next</i>
            </div>
        )
    }

    render() {
        const song = this.props.album.songs ? this.props.album.songs[this.props.no].stream_url : ""
        console.log.props;
        return (
            <div className="player">
                <audio id="music" ref={this.music} controls>
                    <source
                        src={this.props.album.artist ?
                            `http://192.168.99.100:3004/songs/${song}` : ""}
                        type="audio/mp3" />
                </audio>
                {this.renderProgressBar()}
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
        playNext: (no) => dispatch(playNext(no)),
        playPrev: (no) => dispatch(playPrev(no)),
        setProgress: (progress) => dispatch(setProgress(progress)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
