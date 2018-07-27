import React from 'react';
import {Link} from "react-router-dom";
import Links from "./links";

const NewLink = () => {

  const getLinkInfo = () => {
    Links.links_info.push({name: document.getElementById("link-name").value,
      owner: document.getElementById("user-name").innerText,
      URL: document.getElementById("link-url").value,
      path_URL: document.getElementById("link-path").value});
    console.log(Links.links_info);
  };

  return(
      <form className={"container"} style={{padding: 80}}>
        <div className="form-group">
          <label>Link Name</label>
          <input id="link-name" type="text" className="form-control form-control-sm" placeholder="Enter the link name - for display purpose"/>
        </div>
        <div className="form-group">
          <label>Link URL</label>
          <input id="link-url" type="text" className="form-control form-control-sm" placeholder="Enter the link url"/>
        </div>
        <div className="form-group">
          <label>Link Path</label>
          <input id="link-path" type="url" className="form-control form-control-sm" placeholder="Enter the link path"/>
        </div>
        <Link to={"/links"} className="btn btn-primary btn-sm" onClick={getLinkInfo}>Submit</Link>
      </form>
  );
};

export default NewLink;