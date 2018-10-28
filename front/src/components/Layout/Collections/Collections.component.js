import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCollections } from './Collections.actions'
import Carousel from './Carousel/Carousel.component'

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

class Collections extends Component {

    componentWillMount() {
        this.props.fetchCollectionsData();
        console.log(this.props)
    }

    render() {
        return (
            <div>

                {this.props.list.map(col => {console.log(col)
                    return (
                        <Carousel key={col._id}
                            data={col}
                        />

                    )
                })}

            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state update')
    console.log(state)
    return {
        ...state.collections
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCollectionsData: () => dispatch(fetchCollections())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collections);