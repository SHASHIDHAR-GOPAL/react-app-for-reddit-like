import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Links from './components/links';
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
                    <Route path={"/"} exact={true} component={Links}/>
                    <Route path={"/links"} exact={true} component={Links}/>
                    <Route path={'/links/natgeo-twitter'} exact={true} component={NatgeoTwitter}/>
                </div>
            </Switch>
        </Router>
    );
  }
}

export default App;