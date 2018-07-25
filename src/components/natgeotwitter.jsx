import React from 'react';
import Home from './home';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';

const NatgeoTwitter = () => {

    function copy(){
        window.getSelection().selectAllChildren(document.getElementById("link-share"));
        document.execCommand("copy");
    }

    return(
        <div>
            <Home/>
            <div id="main-content" className="container">
                <Link to={'/links/natgeo-twitter'}>Nat Geo - Twitter</Link>
                <div id="content" className="col-md-9 center-block"><b>Submitted by Ken</b></div>
                <div id="content" className="col-md-9 center-block">
                    <div id={"link-share"}>https://twitter.com/NatGeo
                        <button className={"btn btn-danger btn-sm"} onClick={copy}>Copy</button>
                    </div>
                </div>
            </div>
            <hr className={"container"}/>
        </div>
  );
};

export default NatgeoTwitter;