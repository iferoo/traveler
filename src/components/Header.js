import React from 'react';

export default function Header() {
  return (
    <header
      id="gtco-header"
      className="gtco-cover gtco-cover-md"
      role="banner"
      style={{backgroundImage: `url('images/img_bg_2.jpg')`}}
    >
      <div className="overlay"></div>
      <div className="gtco-container">
        <div className="row">
          <div className="col-md-12 col-md-offset-0 text-left">
            <div className="row row-mt-15em">
              <div
                className="col-md-7 mt-text animate-box"
                data-animate-effect="fadeInUp"
              >
                <h1>Planing Trip To Anywhere in The World?</h1>
              </div>
              <div
                className="col-md-4 col-md-push-1 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="form-wrap">
                  <div className="tab">
                    <div className="tab-content">
                      <div
                        className="tab-content-inner active"
                        data-content="signup"
                      >
                        <h3>Book Your Trip</h3>
                        <form action="#">
                          <div className="row form-group">
                            <div className="col-md-12">
                              <label htmlFor="fullname">Your Name</label>
                              <input
                                type="text"
                                id="fullname"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-md-12">
                              <label htmlFor="activities">Activities</label>
                              <select
                                name="#"
                                id="activities"
                                className="form-control"
                              >
                                <option value="">Activities</option>
                                <option value="">Hiking</option>
                                <option value="">Caving</option>
                                <option value="">Swimming</option>
                              </select>
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-md-12">
                              <label htmlFor="destination">Destination</label>
                              <select
                                name="#"
                                id="destination"
                                className="form-control"
                              >
                                <option value="">Philippines</option>
                                <option value="">USA</option>
                                <option value="">Australia</option>
                                <option value="">Singapore</option>
                              </select>
                            </div>
                          </div>

                          <div className="row form-group">
                            <div className="col-md-12">
                              <label htmlFor="date-start">Date Travel</label>
                              <input
                                type="text"
                                id="date-start"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="row form-group">
                            <div className="col-md-12">
                              <input
                                type="submit"
                                className="btn btn-primary btn-block"
                                value="Submit"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
