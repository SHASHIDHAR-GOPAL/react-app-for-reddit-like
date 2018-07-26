import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NatgeoTwitter from "./components/natgeotwitter";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from "./components/header";
import Links from "./components/links";
import NewLink from "./components/newLink";
import Adobe from "./components/adobe";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <div>
              <Header/>
              <Route path={'/links'} exact={true} component={Links}/>
              <Route path={'/links/new'} exact={true} component={NewLink}/>
              <Route path={'/links/natgeo-twitter'} exact={true} component={NatgeoTwitter}/>
              <Route path={'/links/adobe'} exact={true} component={Adobe}/>
            </div>
          </Switch>
        </Router>
    );
  }
}

export default App;