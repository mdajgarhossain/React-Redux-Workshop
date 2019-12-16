import React, { Component } from 'react';

import ChildComponent from './child_components';

class LifeCycleDemo extends Component {
    constructor(props) {
        super(props);
        console.log('LCM - constructor(1)');
    }

    state = {
        count: 0
    };

    // componentWillMount() {
    //     console.log('LCM - componentWillMount(2)');
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('LCM - getDerivedStateFromProps(2)');
        return null;
    }

    componentDidMount() {
        console.log('LCM - componentDidMount(8)');
    }

    shouldComponentUpdate() {
        console.log('LCM - shouldComponentUpdate()');
        // return true;
        console.log(this.state);
        return false;
    }

    componentDidUpdate() {
        console.log('LCM - componentDidUpdate()');
    }


    render() {
        console.log('LCM - render(3)');
        console.log(this.state.count);
        
        return (
            <div>
                <h1>Life Cycle Demo: {this.state.count}</h1>
                {/* <ChildComponent /> */}
                <button 
                    className='btn btn-primary btn-lg' 
                    onClick={() => this.setState({count: this.state.count + 1})}
                >
                    ADD
                </button>
            </div>
        )
    }
}

export default LifeCycleDemo;