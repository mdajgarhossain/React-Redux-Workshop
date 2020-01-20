import React, {useContext} from 'react';

import {AuthContext} from './auth_context';
import Navbar from './navbar';
import Profile from './profile';

const User = () => {

    const {isAuthenticated} = useContext(AuthContext);

    return(
        <div>
            <Navbar />
            <hr/>
            {isAuthenticated ? (
                <Profile />
            ) : (
                <p>Please Login</p>
            )}
        </div>
    );
}

export default User;