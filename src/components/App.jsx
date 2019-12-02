import React, {Component} from 'react';
import Profile from './profile';
import MyState from './state';
import MyEvents from './my_events';
import MyForm from './my_forms';

class App extends Component {

    //state lifting up
    handleForm = (data) => {
        console.log('I am from APP!');
        console.log(data);
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        {/* Day 2 */}
                        {/* <Profile id={1}/>
                        <Profile id={2}/>
                        <Profile id={3}/> */}

                        {/* Day 3 */}
                        {/* <MyState /> */}

                        {/* Day 5 */}
                        {/* <MyEvents /> */}

                        {/* Day 6 */}
                        <MyForm handleForm={this.handleForm}/>

                    </div>
                </div>
            </div>
        );
    }
}

export default App