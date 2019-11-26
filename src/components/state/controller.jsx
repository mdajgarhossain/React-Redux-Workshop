import React, { Component } from 'react';

class Controller extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>Decrement</button>
            </div>
        )
    }
}

export default Controller;