import React, { Component } from 'react'

class ShowData extends Component {
    render() {
        return (
            <div>
                <h1>Current number: {this.props.number}</h1>
            </div>
        )
    }
}

export default ShowData;