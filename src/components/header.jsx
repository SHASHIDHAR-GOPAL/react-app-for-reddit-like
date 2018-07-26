import React from 'react';
import Logo from "./logo";
import Authenticate from "./authenticate"
import {Redirect} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn: false,
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin() {
        alert("Login via Google was successful!");
        this.setState({isUserLoggedIn: true});
    }

    handleLogout() {
        alert("Logout was successful");
        this.setState({isUserLoggedIn: false});
    }

    showLinksIfUserLoggedIn() {
        if (this.state.isUserLoggedIn)
            return (<Redirect to={{pathname: "/links"}}/>);
        return (<Redirect to={{pathname: "/"}}/>);
    }

    render() {
        return (
            <div>
                <div className={"navbar navbar-expand-lg navbar-light bg-light"}>
                    <Logo name="chirp"/>
                    <Authenticate handleLogin={this.handleLogin} handleLogout={this.handleLogout}
                                  isUserLoggedIn={this.state.isUserLoggedIn}/>
                </div>
                {this.showLinksIfUserLoggedIn()}
            </div>
        );
    };
}

export default Header;