import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
 
    render () {
        return (
          <nav className="site-header sticky-top py-1 ">
            <div className="container d-flex flex-column flex-md-row justify-content-between">
              <Link className="py-2" to="/">
                <i className="fa fa-camera"></i>  <b>Album</b>
              </Link>
              <Link className="py-2 d-none d-md-inline-block" to="#">Tour</Link>
              <Link className="py-2 d-none d-md-inline-block" to="#">Product</Link>
              <Link className="py-2 d-none d-md-inline-block" to="#">Features</Link>
              <Link className="py-2 d-none d-md-inline-block" to="#">Enterprise</Link>
              <Link className="py-2 d-none d-md-inline-block" to="#">Support</Link>
              <Link className="py-2 d-none d-md-inline-block" to="#">Pricing</Link>
              <Link className="py-2 d-none d-md-inline-block" to="/lien-he">Liên hệ</Link>
            </div>
          </nav>

        );
      };
 }

 export default Header;
 