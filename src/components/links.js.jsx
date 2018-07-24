import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';

const Links = (props) => {
    return (
        <div id="main-content" className="container">
            <a href={"#"}>{props.message}</a>
            <div id="content" className="col-md-9 center-block">
                {props.id}
            </div>
        </div>
    );
}

export default Links;