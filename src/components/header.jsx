import React from 'react';
import Logo from "./logo";
import Authenticate from "./authenticate"

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
        this.setState({isUserLoggedIn: true});
    }

    handleLogout() {
        this.setState({isUserLoggedIn: false});
    }

    render() {
        return (
            <div>
                <div className={"navbar navbar-expand-lg navbar-light bg-light"}>
                    <Logo name="chirp"/>
                    <Authenticate handleLogin={this.handleLogin} handleLogout={this.handleLogout}
                                  isUserLoggedIn={this.state.isUserLoggedIn}/>
                </div>
            </div>
        );
    };
}

export default Header;