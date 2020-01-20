import React, {createContext, Component} from 'react';

let AuthContext = null;
const {Provider, Consumer} = (AuthContext = createContext());

class AuthProvider extends Component {
    state = {
        user: {
            name: 'A.H. Jewell',
            email: 'ajgar@gmail.com',
            profession: 'Software Developer'
        },

        isAuthenticated: true
    }

    toggleAuthentication = () => {
        this.setState(prev => ({isAuthenticated: !prev.isAuthenticated}));
    }

    render() {
        return(
            <Provider
                value={{...this.state, toggleAuth: this.toggleAuthentication}}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export {AuthProvider, Consumer as AuthConsumer, AuthContext};