import React from 'react';
import Logo from "./logo";
import Authenticate from "./authenticate"
import {Redirect} from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
      userName: "",
      profilePic: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(response) {
    alert("Login via Google was successful!");
    this.setState({
      isUserLoggedIn: true,
      userName: response.profileObj.name,
      profilePic: response.profileObj.imageUrl
    });
  }

  handleLogout() {
    alert("Logout was successful");
    this.setState({ isUserLoggedIn: false });
  }

  showLinksIfUserLoggedIn() {
    if (this.state.isUserLoggedIn) {
      return (<Redirect to={{ pathname: "/links" }}/>);
    }
    return (<Redirect to={{ pathname: "/" }}/>);
  }

  render() {
    return (
        <div>
          <div className={"navbar navbar-expand-lg navbar-light bg-light"}>
            <Logo name="chirp"/>
            <Authenticate handleLogin={this.handleLogin}
                          handleLogout={this.handleLogout}
                          isUserLoggedIn={this.state.isUserLoggedIn}
                          userName={this.state.userName}
                          profilePic={this.state.profilePic}
            />
          </div>
          {this.showLinksIfUserLoggedIn()}
        </div>
    );
  };
}

export default Header;