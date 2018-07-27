import React from 'react';
import {Link} from 'react-router-dom';

class Links extends React.Component{

  static links_info = [{name: 'Adobe', owner: 'Nick', URL: 'adobe', path_URL: 'https://adobe.com'},
    {name: 'Nat Geo - Twitter', owner: 'Ken', URL: 'natgeo-twitter', path_URL: 'https://twitter.com/NatGeo'},
  ];

  render(){
    return(
        <div>
          {Links.links_info.map((link) => {
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
}

export default Links;