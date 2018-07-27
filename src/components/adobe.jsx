import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Vote from "./votes";
import Links from "./links"

const Adobe = () => {

  function copy() {
    window.getSelection().selectAllChildren(document.getElementById("link-share"));
    document.execCommand("copy");
  }

  return (
      <div>
        <div id="main-content" className="container">
          <a href={Links.links_info[0].path_URL}>{Links.links_info[0].name}</a>
          <div id="content" className="col-md-9 center-block"><b>Submitted by {Links.links_info[0].owner}</b></div>
          <div id="content" className="col-md-9 center-block">
            <div id={"link-share"}>{Links.links_info[0].path_URL}
              <button className={"btn btn-danger btn-sm"} onClick={copy}>Copy</button>
              <pre/>
              <Vote/>
            </div>
          </div>
        </div>
        <hr className={"container"}/>
      </div>
  );
};

export default Adobe;