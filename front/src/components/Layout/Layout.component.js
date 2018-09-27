import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation.component'
import Carousel from './../Carousel/Carousel.component'

const carouselMock = {
    title: "Często odtwarzane",
    description: "Twoje najczęsciej odtwarzane w tym miesiącu",
    albums: [
        {
            title: "Album 1",
            artist: "Katy Perry",
            cover: "http://1.bp.blogspot.com/-DFtZ6n8yv6U/Twz13Kj2ybI/AAAAAAAABLs/GcTCavEv-lc/s1600/Katy_Perry.jpg"

        }, {
            title: "Album 1",
            artist: "Katy Perry",
            cover: "http://1.bp.blogspot.com/-DFtZ6n8yv6U/Twz13Kj2ybI/AAAAAAAABLs/GcTCavEv-lc/s1600/Katy_Perry.jpg"

        }, {
            title: "Album 1",
            artist: "Katy Perry",
            cover: "http://1.bp.blogspot.com/-DFtZ6n8yv6U/Twz13Kj2ybI/AAAAAAAABLs/GcTCavEv-lc/s1600/Katy_Perry.jpg"

        }, {
            title: "Album 1",
            artist: "Katy Perry",
            cover: "http://1.bp.blogspot.com/-DFtZ6n8yv6U/Twz13Kj2ybI/AAAAAAAABLs/GcTCavEv-lc/s1600/Katy_Perry.jpg"

        }, {
            title: "Album 1",
            artist: "Katy Perry",
            cover: "http://1.bp.blogspot.com/-DFtZ6n8yv6U/Twz13Kj2ybI/AAAAAAAABLs/GcTCavEv-lc/s1600/Katy_Perry.jpg"

        },

    ]
}

const xd = [
    {
        title: "Album 1",
        artist: "Katy Perry",
        cover: "http://1.bp.blogspot.com/-DFtZ6n8yv6U/Twz13Kj2ybI/AAAAAAAABLs/GcTCavEv-lc/s1600/Katy_Perry.jpg"

    }
]


class Layout extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="content">
                        <Carousel
                            data={carouselMock}
                        />
                        <Carousel
                            data={carouselMock}
                        />
                        <Carousel
                            data={carouselMock}
                        />
                        <Carousel
                            data={carouselMock}
                        />
                    </div>
                    <div className="player">
                    </div>
                    <div className="navigation">
                        <Navigation />
                    </div>
                </div>


            </div>
        )
    }


}

export default Layout;