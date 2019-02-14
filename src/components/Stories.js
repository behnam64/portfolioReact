import React from "react";
import Story from "./story";
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
        {props.stories.map(story => {
          return <Story story={story}/>
        })}
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text">Read all srories &rarr;</a>
      </div>
    </section>
  );
}