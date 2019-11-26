import React, {Component} from 'react';
import Profile from './profile';
import MyState from './state';

class App extends Component {

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        {/* <Profile id={1}/>
                        <Profile id={2}/>
                        <Profile id={3}/> */}

                        <MyState />

                    </div>
                </div>
            </div>
        );
    }
}

export default App