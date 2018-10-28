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
        <div
            key={album._id}
            className="carousel-album">
            <div className="carousel-album_cover">
                <img src={`http://192.168.99.100:5000/covers/${album.cover_id}.jpg`} />
            </div>
            <div className="carousel-album_title">
                {album.name}
            </div>
            <div className="carousel-album_info">
                {(!album.artist.name) ? album.subs : album.artist.name}
            </div>

        </div>
    ))



}

export default Carousel;