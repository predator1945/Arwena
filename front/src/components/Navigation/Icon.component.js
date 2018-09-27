import React, { Component } from 'react';

class Icon extends Component {

    render() {
        return (
            <div className="icon-element"
            onClick={this.props.onClick}
            >
                <div className="icon-svg"
                >
                    <svg viewBox="0 0 1024 1024">
                        {getPath(this.props.svg)}
                        <path d={this.props.svg}></path>
                    </svg>
                </div>
                <div className="icon-label">
                    {this.props.label}
                </div>
            </div>

        )
    }
}

const getPath = (arr) => {
    return arr.map(el => (
        <path
            key={el}
            d={el}> </path>
    ))
}



export default Icon;
