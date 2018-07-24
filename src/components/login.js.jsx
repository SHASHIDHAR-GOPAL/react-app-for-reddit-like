import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';

const Login = (props) => {
    return(
        <ul className="navbar-nav ml-auto">
            <a className={"nav-link"} href={"#"}>{props.newUser}</a>
            <a className={"nav-link"} href={"#"}>{props.existingUser}</a>
        </ul>
    );
};

export default Login;