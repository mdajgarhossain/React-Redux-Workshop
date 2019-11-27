import React, { Component } from 'react';

class ClickMe extends Component {

    /*componentDidMount() {
        const btn = document.getElementById('my-btn');
        btn.addEventListener('click', () => {
            alert('Ha ha ha! This is an alert!');
        });
    }*/

    /*handleClick = (event, target) => {
        console.log(target);
    }*/

    state = {
        count: 0
    };

    handleClick = () => {
        // this.setState((prevState) => ({count: prevState.count + 1}));

        this.setState((prevState) => {
            if(prevState.count === 10) {
                return {
                    count: 0
                };
            } else {
                return {
                    count: prevState.count + 1
                };
            }
        });

    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <button onClick={this.handleClick} className='btn btn-success'>
                    Click Me
                </button>
                <br />
                {/* {this.state.count > 0 ? <p>Test</p> : null} */}
                {/* {count > 0 && <p>Count Value: {count}</p>} */}
                {count > 0 ? <p>Count Value: {count}</p> : <p>Please start count</p>}

            </div>
        )
    }
}

export default ClickMe;