import React, { Component } from 'react';
import './App.css';
import Home from "./components/home.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <div>
                    <Route path={"/"} exact={true} component={Home}/>
                    <Route path={"/links"} component={Home}/>
                </div>
            </Switch>
        </Router>
    );
  }
}

export default App;
