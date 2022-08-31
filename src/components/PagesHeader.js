import React from 'react';

export default function PagesHeader({title, imgUrl}) {
  return (
    <div
      id="gtco-header"
      class="gtco-cover gtco-cover-sm"
      role="banner"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div class="overlay"></div>
      <div class="gtco-container">
        <div class="row">
          <div class="col-md-12 col-md-offset-0 text-center">
            <div class="row row-mt-15em">
              <div
                class="col-md-12 mt-text animate-box"
                data-animate-effect="fadeInUp"
              >
                <h1>{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
