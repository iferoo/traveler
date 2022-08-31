import React from 'react';

export default function ContactHeader() {
  return (
    <div
      id="gtco-header"
      class="gtco-cover gtco-cover-sm"
      role="banner"
      style={{backgroundImage: `url(images/img_bg_3.jpg)`}}
    >
      <div class="overlay"></div>
      <div class="gtco-container">
        <div class="row">
          <div class="col-md-12 col-md-offset-0 text-left">
            <div class="row row-mt-15em">
              <div
                class="col-md-7 mt-text animate-box"
                data-animate-effect="fadeInUp"
              >
                <span class="intro-text-small">Don't be shy</span>
                <h1>Get In Touch</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
