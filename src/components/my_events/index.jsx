import React, { Component } from 'react';
import ClickMe from './click_me';

class MyEvents extends Component {
    render() {
        return (
            <div>
                <h1>My Events</h1>
                <ClickMe />
            </div>
        )
    }
}

export default MyEvents;