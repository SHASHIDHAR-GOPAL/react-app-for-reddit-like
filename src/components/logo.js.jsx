import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
import React from 'react';

const Logo = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className={"logo"} href={"#"}>{props.name}</a>
        </nav>
    );
};

export default Logo;