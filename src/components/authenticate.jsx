import React from 'react'
import {GoogleLogin, GoogleLogout} from "react-google-login";
import 'bootstrap/dist/css/bootstrap.css'

const Authenticate = (props) => {

    const userNotLoggedIn = () => {
        return (
            <div className={"navbar-nav ml-auto"} style={{paddingRight: 50}}>
                <GoogleLogin
                    clientId="498131561355-sdnlg1nequidq5dru7u8e4ci1llcikqr.apps.googleusercontent.com"
                    className={"btn btn-sm btn-dark"}
                    buttonText="Login with Google"
                    onSuccess={onLoginSuccess}
                    onFailure=""
                />
            </div>
        );
    };

    const userLoggedIn = () => {
        return (
            <div className={"navbar-nav ml-auto"}>
                <GoogleLogout
                    className={"btn btn-sm btn-light"}
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                />
            </div>
        );
    };

    const onLoginSuccess = () => {
        alert("Login via Google was successful!");
        return(
            props.handleLogin
        );
    };

    const onLogoutSuccess = () => {
        alert("Logout was successful");
        return(
            props.handleLogout
        );
    };

    if (props.isUserLoggedIn) {
        return (userLoggedIn());
    }
    return (userNotLoggedIn());
};

export default Authenticate;