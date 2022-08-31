import React from 'react';

export default function Plans() {
  return (
    <div className="gtco-section border-bottom">
      <div className="gtco-container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
            <h2>Choose The Best Plan For You</h2>
            <p>
              Join over 1 Million of users. Dignissimos asperiores vitae velit
              veniam totam fuga molestias accusamus alias autem provident. Odit
              ab aliquam dolor eius.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="price-box">
              <h2 className="pricing-plan">Starter</h2>
              <div className="price">
                <sup className="currency">$</sup>7<small>/mo</small>
              </div>
              <p>Basic customer support for small business</p>
              <hr />
              <ul className="pricing-info">
                <li>10 projects</li>
                <li>20 Pages</li>
                <li>20 Emails</li>
                <li>100 Images</li>
              </ul>
              <a href="#" className="btn btn-default btn-sm">
                Get started
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="price-box">
              <h2 className="pricing-plan">Regular</h2>
              <div className="price">
                <sup className="currency">$</sup>19<small>/mo</small>
              </div>
              <p>Basic customer support for small business</p>
              <hr />
              <ul className="pricing-info">
                <li>15 projects</li>
                <li>40 Pages</li>
                <li>40 Emails</li>
                <li>200 Images</li>
              </ul>
              <a href="#" className="btn btn-default btn-sm">
                Get started
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="price-box popular">
              <div className="popular-text">Popular</div>
              <h2 className="pricing-plan">Plus</h2>
              <div className="price">
                <sup className="currency">$</sup>79<small>/mo</small>
              </div>
              <p>Basic customer support for small business</p>
              <hr />
              <ul className="pricing-info">
                <li>Unlimitted projects</li>
                <li>100 Pages</li>
                <li>100 Emails</li>
                <li>700 Images</li>
              </ul>
              <a href="#" className="btn btn-primary btn-sm">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
