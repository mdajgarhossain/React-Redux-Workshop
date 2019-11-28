import React, { Component } from 'react';
import ClickMe from './click_me';
import TwoWayData from './two_way_data';
import ChangeName from './change_name';

class MyEvents extends Component {
    render() {
        return (
            <div>
                <h1>My Events</h1>
                {/* <ClickMe />
                <TwoWayData /> */}

                <ChangeName />
            </div>
        )
    }
}

export default MyEvents;