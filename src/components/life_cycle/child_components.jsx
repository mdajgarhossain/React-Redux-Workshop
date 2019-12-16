import React, { Component } from 'react'

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        console.log('LCM for ChildComponent- constructor(4)');
    }

    state = {
        count: 0
    };

    // componentWillMount() {
    //     console.log('LCM for ChildComponent - componentWillMount(2)');
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('LCM for ChildComponent - getDerivedStateFromProps(5)');
        return null;
    }

    componentDidMount() {
        console.log('LCM for ChildComponent - componentDidMount(7)');
    }


    render() {
        console.log('LCM for ChildComponent - render(6)');
        
        return (
            <div>
                <h1>Child Component</h1>
            </div>
        )
    }
}

export default  ChildComponent;