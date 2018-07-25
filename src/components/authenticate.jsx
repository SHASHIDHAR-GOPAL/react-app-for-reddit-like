import React from 'react'
import {GoogleLogin, GoogleLogout} from "react-google-login";
import 'bootstrap/dist/css/bootstrap.css'

const Authenticate = (props) => {

    const responseGoogle = (response) => {
        console.log(response);
    };

    const userNotSignedIn = () => {
        return (
            <div className={"navbar-nav ml-auto"} style={{paddingRight: 50}}>
                <GoogleLogin
                    clientId="498131561355-sdnlg1nequidq5dru7u8e4ci1llcikqr.apps.googleusercontent.com"
                    className={"btn btn-sm btn-dark"}
                    buttonText="Login with Google"
                    onSuccess={{onLoginSuccess}}
                    onFailure={{onLoginFailure}}
                />
            </div>
        );
    };

    const userSignedIn = () => {
        return (
            <div className={"navbar-nav ml-auto"}>
                <GoogleLogout
                    className={"btn btn-sm btn-light"}
                    buttonText="Logout"
                    onLogoutSuccess={responseGoogle}
                />
            </div>
        );
    };

    const onLoginSuccess = () => {
        return(
            <div className={"alert alert-success alert-dismissible fade show"} role={"alert"}>Login via Google was successful!</div>
        );
    };

    const onLoginFailure = () => {
        return(
            <div className={"alert alert-danger alert-dismissible fade show"} role={"alert"}>Login failed!</div>
        );
    };

    if (props.isUserSignedIn) {
        return (userSignedIn());
    }
    return (userNotSignedIn());
};

export default Authenticate;