import React, { Component } from 'react';
import './App.css';
import Logo from "./components/logo.js.jsx";
import Login from "./components/login.js.jsx"

class App extends Component {
  render() {
    return (
        <div className={"navbar navbar-expand-lg navbar-light bg-light"}>
          <Logo name="chirp"/>
          <Login newUser="Sign up" existingUser="Sign in"/>
        </div>
    );
  }
}

export default App;
