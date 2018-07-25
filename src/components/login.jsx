import React from 'react'

const Login = (props) => {

    const userNotSignedIn = () => {
        return (
            <div className={"navbar-nav ml-auto"}>
                <a className={"nav-link"} onClick={props.handleSignIn}> Sign up </a>
                <a className={"nav-link"} onClick={props.handleSignIn}> Sign in </a>
            </div>
        );
    };

    const userSignedIn = () => {
        return (
            <div className={"navbar-nav ml-auto"}>
                <a className={"nav-link"}> Submit Link </a>
                <a className={"nav-link"} onClick={props.handleSignOut}> Sign out </a>
            </div>
        );
    };

    if (props.isUserSignedIn) {
        return (userSignedIn());
    }
    return (userNotSignedIn());
};

export default Login;