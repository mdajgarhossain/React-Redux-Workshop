import React, { Component } from 'react';
import ShowData from './showData';
import Controller from './controller';

class MyState extends Component {

    state = {
        number: 0
    };

    //3rd approach
    increment = () => {
        this.setState(currentState => ({number: currentState.number + 1, spinner: false}));
    }

    decrement = () => {
        this.setState(currentState => ({number: currentState.number - 1}));
    }


    render() {
        //1st approach
        /*return (
            <h1> Number: {setTimeout(() => {
                            this.setState({
                                number: this.state.number + 1
                            });       
                        }, 1000)}
            </h1>
        );*/
        
        //2nd approach
        /*setTimeout(() => {
            this.setState({
                number: this.state.number + 1
            });
        }, 1000);*/

        return(
            <div>
                <ShowData number={this.state.number}/>
                <Controller increment={this.increment} decrement={this.decrement}/>
            </div>
        );
    }
}

export default MyState;
