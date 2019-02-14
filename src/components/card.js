import React from "react";

export default function card(props) {
  return (
    <div className="col-4-of-12">
      <div className="card">
        <div className="card__side card__side--front">
          <div className={`card__picture card__picture--${props.tour.id}`}>
            &nbsp;
          </div>
          <h4 className="card__heading">
            <span className={`card__heading-span card__heading-span--${props.tour.id}`}>
              {props.tour.heading}
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>{props.tour.details[0]}</li>
              <li>{props.tour.details[1]}</li>
              <li>{props.tour.details[2]}</li>
              <li>{props.tour.details[3]}</li>
              <li>{props.tour.details[4]}</li>
            </ul>
          </div>
        </div>
        <div className={"card__side card__side--back card__side--back-" + props.tour.id}>
          <div className="card__cta">
            <div className="card__price-box">
              <div className="card__price-only">Only</div>
              <div className="card__price-value">{props.tour.price}</div>
            </div>
            <a href="#" className="btn btn--white">Book now!</a>
          </div>
        </div>
      </div>
    </div>
  );
}