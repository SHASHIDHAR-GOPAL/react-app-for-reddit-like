import React from 'react';
import {Link} from 'react-router-dom';

const Links = () => {
  const links_info = [{name: 'Adobe', owner: 'Nick', URL: 'adobe'},
                      {name: 'Nat Geo - Twitter', owner: 'Ken', URL: 'natgeo-twitter'},
                      {name: 'RSpec', owner: 'Puj@twittter', URL: 'rspec'},
                      ];

  return (
      <div>
        {links_info.map((link) => {
          return (
              <div>
                <div id="main-content" className="container">
                  <Link to={`/links/${link.URL}`}>{link.name}</Link>
                  <div id="content" className="col-md-9 center-block">Submitted by {link.owner}</div>
                </div>
                <hr className={"container"}/>
              </div>
          );
        })}
      </div>
  );
};

export default Links;
