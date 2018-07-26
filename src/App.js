import React, { Component } from 'react';
import './App.css';
import Home from "./components/home.jsx";
import Links from "./components/links.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import NatgeoTwitter from "./components/natgeotwitter";

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <div>
                    <Route path={"/"} exact={true} component={Home}/>
                    <Route path={'/links/natgeo-twitter'} exact={true} component={NatgeoTwitter}/>
                    <Route path={"/links"} exact={true} component={Links}/>
                </div>
            </Switch>
        </Router>
    );
  }
}

export default App;