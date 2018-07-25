import React from 'react';
import Logo from "./logo";
import Login from "./login.jsx";

const Home = () => {
    return(
        <div>
            <div className={"navbar navbar-expand-lg navbar-light bg-light"}>
                <Logo name="chirp"/>
                <Login newUser="Sign up" existingUser="Sign in"/>
            </div>
        </div>
    );
};

export default Home;
