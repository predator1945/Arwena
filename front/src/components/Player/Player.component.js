import React, { Component } from 'react';
import './playerStyle.css'
class Layout extends Component {

    constructor(props) {
        super(props);

        this.music = React.createRef();
    }
    


    componentDidMount() {
        // play = document.getElementById('playBtn');
        // music = document.getElementById('music');

    }

    playMusic() {
        if(this.music.current.paused) {
            this.music.current.play()
            document.getElementById('playBtn').innerText="pause"
        } else {
            this.music.current.pause()
            document.getElementById('playBtn').innerText="play_arrow"

        }
        console.log()

        // this.music.pause = false;
    }

    render() {
        return (
            <div className="player">
                <audio id="music" ref={this.music} controls>
                    <source src="http://192.168.99.100:3004/songs/2008_-_One_Of_The_Boys%2F01._One_Of_The_Boys"
                        type="audio/mp3" />
                </audio>
                <div className="player-content">
                
                    <img src={`http://192.168.99.100:5000/covers/${this.props.cover_id || 2001}.jpg`} />
                    {/* <h2>{this.props.name}</h2>
                    <h3>{this.props.artist.name}</h3> */}
                

                </div>

                <div className="player-controls">
              
                    <i class="material-icons">skip_previous</i>
                    <i class="material-icons" 
                    id={"playBtn"}
                    onClick={this.playMusic.bind(this)}
                    >play_arrow</i>
                    <i class="material-icons">skip_next</i>
                </div>





            </div>
        )
    }


}

export default Layout;