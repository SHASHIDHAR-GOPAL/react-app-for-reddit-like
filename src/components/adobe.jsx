import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Vote from "./votes";

const Adobe = () => {

  function copy() {
    window.getSelection().selectAllChildren(document.getElementById("link-share"));
    document.execCommand("copy");
  }

  return (
      <div>
        <div id="main-content" className="container">
          <a href="https://adobe.com">Adobe</a>
          <div id="content" className="col-md-9 center-block"><b>Submitted by Nick</b></div>
          <div id="content" className="col-md-9 center-block">
            <div id={"link-share"}>https://adobe.com
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