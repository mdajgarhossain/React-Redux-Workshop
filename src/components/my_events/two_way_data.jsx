import React, { Component } from 'react';

class TwoWayData extends Component {

    state = {
        name: 'Jewell',
        count: 0
    };

    handleChange = (event) => {
        this.setState({name: event.target.value});
        // this.setState((prevState) => ({name: event.target.value}));
        console.log(event.target.value);
        
    }

    render() {
        return (
            <div>
                <p>Two Way Data Bindings!</p>
                <input 
                className='form-control' 
                placeholder='Change your name' 
                value={this.state.name}
                onChange={this.handleChange}
                />
                <p>My name is {this.state.name}</p>
                <br />
                <button className='btn btn-success' onClick={() => this.setState({count: this.state.count + 1})}>
                    Clicked {this.state.count} times!
                </button>
            </div>
        )
    }
}


export default TwoWayData;