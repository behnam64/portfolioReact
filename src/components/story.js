import React from "react";

export default function story(props) {
  return (
    <div className="story u-margin-bottom-big">
      <figure className="story__shape">
        <img src={require(`../assets/${props.story.picture}.jpg`)} alt="person on a tour" className="story__img"/>
        <figcaption className="story__caption">{props.story.name}</figcaption>
      </figure>
      <div className="story__text">
        <h3 className="heading-tertiary u-margin-bottom-small">
          {props.story.heading}
        </h3>
        <p className="paragraph">
          {props.story.paragraph}
        </p>
      </div>
    </div>
  );
}