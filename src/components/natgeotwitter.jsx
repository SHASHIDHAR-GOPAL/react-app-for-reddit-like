import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Vote from "./votes";

const NatgeoTwitter = () => {

    function copy() {
        window.getSelection().selectAllChildren(document.getElementById("link-share"));
        document.execCommand("copy");
    }

    return (
        <div>
            <div id="main-content" className="container">
                <a href="https://twitter.com/NatGeo">Nat Geo - Twitter</a>
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