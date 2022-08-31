import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="gtco-nav" role="navigation">
      <div className="gtco-container">
        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <div id="gtco-logo">
              <Link to="/">
                Traveler <em>.</em>
              </Link>
            </div>
          </div>
          <div className="col-xs-8 text-right menu-1">
            <ul>
              <li>
                <Link to="/destination">Destination</Link>
              </li>
              <li className="has-dropdown">
                <Link to="/">Travel</Link>
                <ul className="dropdown">
                  <li>
                    <a href="#">Europe</a>
                  </li>
                  <li>
                    <a href="#">Asia</a>
                  </li>
                  <li>
                    <a href="#">America</a>
                  </li>
                  <li>
                    <a href="#">Canada</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
