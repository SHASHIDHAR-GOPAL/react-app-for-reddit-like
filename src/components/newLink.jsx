import React from 'react';
import {Link} from "react-router-dom";

const NewLink = () => {

  const getLinkInfo = () => {
    const link_name = document.getElementById("link-name").value;
    const link_url = document.getElementById("link-url").value;
    const link_owner = document.getElementById("user-name").innerText;
    console.log(link_url, link_name, link_owner);
  };

  return(
      <form className={"container"} style={{padding: 80}}>
        <div className="form-group">
          <label>Link Name</label>
          <input id="link-name" type="text" className="form-control form-control-sm" placeholder="Enter name of the link - for display purpose"/>
        </div>
        <div className="form-group">
          <label>Link URL</label>
          <input id="link-url" type="url" className="form-control form-control-sm" placeholder="Enter URL of the link"/>
        </div>
        <Link to={"/links"} className="btn btn-primary btn-sm" onClick={getLinkInfo}>Submit</Link>
      </form>
  );
};

export default NewLink;