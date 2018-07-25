import React from 'react';
import Logo from "./logo";
import Login from "./login"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserSignedIn: false,
        };
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignIn() {
        this.setState({isUserSignedIn: true});
    }

    handleSignOut() {
        this.setState({isUserSignedIn: false});
    }

    render() {
        return (
            <div>
                <div className={"navbar navbar-expand-lg navbar-light bg-light"}>
                    <Logo name="chirp"/>
                    <Login handleSignIn={this.handleSignIn} handleSignOut={this.handleSignOut}
                           isUserSignedIn={this.state.isUserSignedIn}/>
                </div>
            </div>
        );
    };
}

export default Header;