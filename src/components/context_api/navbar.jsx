import React, {useContext} from 'react';
import {AuthContext} from './auth_context';

const Navbar = () => {

    const {isAuthenticated, toggleAuth} = useContext(AuthContext);

    return(
        <>
            {isAuthenticated ? ( 
                <button onClick={toggleAuth}>Logout</button>
            ) : (
                <button onClick={toggleAuth}>Login</button>
            )}
        </>
    );
};
export default Navbar;