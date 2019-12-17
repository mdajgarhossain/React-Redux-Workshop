import React, { Component } from 'react';

import ChildComponent from './child_components';

class LifeCycleDemo extends Component {
    constructor(props) {
        super(props);
        // console.log('LCM - constructor(1)');
    }

    state = {
        allData: ['Data one', 'Data two', 'Data three']
    };

    handleRemove = (index) => {
        let newAllData = [...this.state.allData];
        newAllData.splice(index, 1);
        this.setState({
            allData: newAllData
        });
    }

    
    render() {
        
        return (
            <div>
                <h1>Life Cycle Demo:</h1>
                {this.state.allData.map((data, index) => 
                    <ChildComponent 
                        data={data}
                        key={index}
                        remove={this.handleRemove}
                        index={index}
                    />
                )}
            </div>
        )
    }
}

export default LifeCycleDemo;