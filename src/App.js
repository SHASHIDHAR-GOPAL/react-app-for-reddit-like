import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Links from './components/links';
import NatgeoTwitter from "./components/natgeotwitter";
import {
    BrowserRouter as Router,
    Route,
    Switch} from 'react-router-dom';

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