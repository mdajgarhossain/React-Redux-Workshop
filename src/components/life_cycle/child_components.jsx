import React, { Component } from 'react'

class ChildComponent extends Component {

    componentWillUnmount() {
        console.log('Unmounting...');
    }

    render() {        
        return (
            <div>
                <h1>{this.props.data}</h1>
                <button 
                    className='btn btn-danger' 
                    onClick={() => this.props.remove(this.props.index)}
                >
                    Delete
                </button>
            </div>
        )
    }
}

export default  ChildComponent;