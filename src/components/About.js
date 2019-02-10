import React from "react";
import "./About.scss";
import nat1 from "../assets/nat-1.jpg";
import nat2 from "../assets/nat-2.jpg";
import nat3 from "../assets/nat-3.jpg";

export default function about(props) {
  return (
    <section className="section-about">

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="row">

        <div className="col-6-of-12">
          <h3 className="heading-tertiary u-margin-bottom-small">You'r going to fall in love with nature</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, qui assumenda architecto esse corporis numquam optio amet placeat a nam alias dignissimos quod inventore consectetur distinc.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum consequuntur aliquid ut nulla in, dele .
          </p>
          <a href="#" className="btn-text">learn more &rarr;</a>
        </div>

        <div className="col-6-of-12">
          <div className="compostion" style={{position: "relative"}}>
            <img src={nat1} alt="" className="composition__photo composition__photo--p1"/>
            <img src={nat2} alt="" className="composition__photo composition__photo--p2"/>
            <img src={nat3} alt="" className="composition__photo composition__photo--p3"/>
          </div>
        </div>

      </div>

    </section>
  );
}