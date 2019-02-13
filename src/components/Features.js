import React from "react";
import "./Features.scss";

export default function features(props) {
  return(
    <section className="section-features">

      <div className="row">

        <div className="col-3-of-12">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world text-gradient"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, qui assumenda
            </p>
          </div>
        </div>

        <div className="col-3-of-12">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-compass text-gradient"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, qui assumenda
            </p>
          </div>
        </div>

        <div className="col-3-of-12">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-map text-gradient"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, qui assumenda
            </p>
          </div>
        </div>
          
        <div className="col-3-of-12">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-heart text-gradient"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, qui assumenda
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}