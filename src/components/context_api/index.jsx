import React, {Component, createContext, useContext} from 'react';

const Profile = () => {

    const {user} = useContext(AuthContext);

    return(
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Profession: {user.profession}</p>
        </div>
    );

    // return(
    //     <AuthContext.Consumer>
    //         {({user}) => (
    //             <div>
    //                 <p>Name: {user.name}</p>
    //                 <p>Email: {user.email}</p>
    //             </div>
    //         )}
    //     </AuthContext.Consumer>
    // );
};

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

    // return(
    //     <AuthContext.Consumer>
    //         {({isAuthenticated, toggleAuth}) => (
    //             <>
    //                 {isAuthenticated ? ( 
    //                     <button onClick={toggleAuth}>Logout</button>
    //                 ) : (
    //                     <button onClick={toggleAuth}>Login</button>
    //                 )}
    //             </>
    //         )} 
    //     </AuthContext.Consumer>
    // );

    // if(props.isAuthenticated) {
    //     return <button onClick={props.toggleAuth}>Logout</button>
    // }

    // return <button onClick={props.toggleAuth}>Login</button>

};

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

    // return(
    //     <AuthContext.Consumer>
    //         {(value) => (
    //             <div>
    //                 <Navbar />
    //                 <hr/>
    //                 {value.isAuthenticated ? (
    //                     <Profile />
    //                 ) : (
    //                     <p>Please Login</p>
    //                 )}
    //             </div>
    //         )}
    //     </AuthContext.Consumer>
    // );
}

const AuthContext = createContext();

/*
Main Component
*/
class ContextDemo extends Component {

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
            <div>
                <AuthContext.Provider 
                    value={{
                        ...this.state,
                        toggleAuth: this.toggleAuthentication
                    }}>
                    <h1>Context API</h1>
                    <User />
                </AuthContext.Provider>
            </div>
        );
    }
}

export default ContextDemo;