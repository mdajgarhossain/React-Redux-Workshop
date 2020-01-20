import React from 'react';

import {AuthProvider} from './auth_context';
import User from './user';

/*
Main Component
*/
const ContextDemo = () => {
    return(
        <div>
            <AuthProvider>
                <h1>Context API</h1>
                <User />
            </AuthProvider>
        </div>
    );
}

export default ContextDemo;