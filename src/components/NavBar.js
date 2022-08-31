import React from 'react';

export default function NavBar() {
  return (
    <nav className="gtco-nav" role="navigation">
      <div className="gtco-container">
        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <div id="gtco-logo">
              <a href="index.html">
                Traveler <em>.</em>
              </a>
            </div>
          </div>
          <div className="col-xs-8 text-right menu-1">
            <ul>
              <li>
                <a href="destination.html">Destination</a>
              </li>
              <li className="has-dropdown">
                <a href="#">Travel</a>
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
                <a href="pricing.html">Pricing</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
