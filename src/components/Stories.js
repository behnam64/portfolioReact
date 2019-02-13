import React from "react";
import "./Stories.scss";
import nat8 from "../assets/nat-8.jpg";
import nat9 from "../assets/nat-9.jpg";
import vid1 from "../assets/video.mp4";
import vid2 from "../assets/video.webm";

export default function stories(props) {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoplay muted loop>
          <source src={vid1} type="video/mp4"/>
          <source src={vid2} type="video/webm"/>
          your browser is not supported
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary text-gradient">
          we make people genuinely happy
        </h2>
      </div>
      <div className="row">

        <div className="story u-margin-bottom-big">
          <figure className="story__shape">
            <img src={nat8} alt="person on a tour" className="story__img"/>
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              i had the best week ever with my family
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, qui assumenda architecto esse corporis numquam optio amet placeat a nam alias dignissimos quod inventore consectetur distinc. elit. Illum, qui assumenda architecto esse corporis numquam optio amet placeat a nam alias dignissimos.
            </p>
          </div>
        </div>

        <div className="story">
          <figure className="story__shape">
            <img src={nat9} alt="person on a tour" className="story__img"/>
            <figcaption className="story__caption">jack willson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              wow! my life is completely different now
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, qui assumenda architecto esse corporis numquam optio amet placeat a nam alias dignissimos quod inventore consectetur distinc. elit. Illum, qui assumenda architecto esse corporis numquam optio amet placeat a nam alias dignissimos.
            </p>
          </div>
        </div>

      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text">Read all srories &rarr;</a>
      </div>
    </section>
  );
}