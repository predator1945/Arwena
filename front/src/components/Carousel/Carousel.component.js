import React, { Component } from 'react';
import './carouselStyle.css'

class Carousel extends Component {

    render() {
        return (
            <div className="carousel">
                <div className="carousel-title" >
                    {this.props.data.title}
                </div>
                <div className="carousel-description">
                    {this.props.data.description}
                </div>
                <div className="carousel-body">
                    {this.displayAlbums(this.props.data.albums)}
                </div>
            </div>
        )
    }

    displayAlbums = (albums) => albums.map(album => (
        <div className="carousel-album">
            <div className="carousel-album_cover">
                <img src={album.cover} />
            </div>
            <div className="carousel-album_title">
                {album.title}
            </div>
            <div className="carousel-album_info">
                {(!album.artist) ? album.subs : album.artist}
            </div>

        </div>
    ))



}

export default Carousel;