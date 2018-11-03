import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCollections } from './Collections.actions'
import Carousel from './Carousel/Carousel.component'

class Collections extends Component {

    componentWillMount() {
        this.props.fetchCollectionsData();
    }

    render() {
        return (
            <div>

                {this.props.list.map(col => {
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