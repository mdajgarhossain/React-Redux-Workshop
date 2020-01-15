import React from 'react';

const Profile = props => {
    return(
        <div>
            <p>Name: {props.user.name}</p>
            <p>Email: {props.user.email}</p>
        </div>
    );
}

const Navbar = props => {
    if(props.isAuthenticated) {
        return <button onClick={props.toggleAuth}>Logout</button>
    }

    return <button onClick={props.toggleAuth}>Login</button>

}

const User = props => {
    return(
        <div>
            <Navbar toggleAuth={props.toggleAuth} isAuthenticated={props.isAuthenticated}/>
            <hr/>
            {props.isAuthenticated ? (
                <Profile user={props.user}/>
            ) : (
                <p>Please Login</p>
            )}
        </div>
    );
}

class ContextDemo extends React.Component {

    state = {
        user: {
            name: 'A.H. Jewell',
            email: 'jewel@gmail.com'
        },

        isAuthenticated: true
    }

    toggleAuthentication = () => {
        this.setState(prev => ({isAuthenticated: !prev.isAuthenticated}));
    }

    render() {
        const {isAuthenticated, user} = this.state;
        return(
            <div>
                <h1>Context API</h1>
                <User 
                    isAuthenticated={isAuthenticated}
                    user={user}
                    toggleAuth={this.toggleAuthentication}
                />
            </div>
        );
    }
}

export default ContextDemo;