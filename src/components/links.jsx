import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import Home from "./home";

const Links = () => {
    return(
        <div>
            <Home/>
            <div id="main-content" className="container">
                <Link to={'/links/natgeo-twitter'}>Nat Geo - Twitter</Link>
                <div id="content" className="col-md-9 center-block">Submitted by Ken</div>
            </div>
            <hr className={"container"}/>
            <div id="main-content" className="container">
                <Link to={'/links/adobe'}>Adobe</Link>
                <div id="content" className="col-md-9 center-block">Submitted by Nick</div>
            </div>
            <hr className={"container"}/>
        </div>
    );
};

export default Links;