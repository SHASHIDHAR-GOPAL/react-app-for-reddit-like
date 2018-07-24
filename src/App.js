import React, { Component } from 'react';
import './App.css';
import Logo from "./components/logo.js.jsx";
import Login from "./components/login.js.jsx";
import Links from "./components/links.js.jsx"

class App extends Component {
  render() {
    return (
        <div>
            <div className={"navbar navbar-expand-lg navbar-light bg-light"}>
                <Logo name="chirp"/>
                <Login newUser="Sign up" existingUser="Sign in"/>
            </div>
            <Links message={"Hello"} id={"Joe"}/>
            <hr className="container"/>
            <Links message={"What's up?"} id={"ken"}/>
            <hr className="container"/>
        </div>
    );
  }
}

export default App;
