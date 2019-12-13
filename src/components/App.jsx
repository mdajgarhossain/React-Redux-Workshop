import React, {Component} from 'react';

import styles from './app.module.css';

import Profile from './profile';
import MyState from './state';
import MyEvents from './my_events';
import MyForm from './my_forms';
import MyFormik from './my_formik';
import MyList from './my_list';
import MyTable from './my_table';

class App extends Component {

    //state lifting up
    handleForm = (data) => {
        console.log('I am from APP! Form Data received!');
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

                        {/* Day 6, 7 */}
                        {/* <MyForm handleForm={this.handleForm}/> */}

                        {/* Day 8 */}
                        {/* <MyFormik /> */}

                        {/* Day 9 */}
                        {/* <MyList /> */}

                        {/* Day 10 */}
                        <MyTable />

                    </div>
                </div>
            </div>
        );
    }
}

export default App