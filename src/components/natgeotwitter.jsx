import React from 'react';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import Vote from "./votes";

const NatgeoTwitter = () => {

    function copy() {
        window.getSelection().selectAllChildren(document.getElementById("link-share"));
        document.execCommand("copy");
    }

    return (
        <div>
            <Header/>
            <div id="main-content" className="container">
                <Link to={'/links/natgeo-twitter'}>Nat Geo - Twitter</Link>
                <div id="content" className="col-md-9 center-block"><b>Submitted by Ken</b></div>
                <div id="content" className="col-md-9 center-block">
                    <div id={"link-share"}>https://twitter.com/NatGeo
                        <button className={"btn btn-danger btn-sm"} onClick={copy}>Copy</button>
                    </div>
                    <Vote/>
                </div>
            </div>
            <hr className={"container"}/>
        </div>
    );
};

export default NatgeoTwitter;