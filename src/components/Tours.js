import React from "react";
import Card from "./card";
import "./Tours.scss";

export default function tours(props) {

  return (
    <section className="section-tours">

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary text-gradient">
          Most popular tours
        </h2>
      </div>

      <div className="row">
        {props.tours.map(tour => {
          return <Card tour={tour} />
        })}
      </div>

      <div className="u-center-text u-margin-bottom-big u-margin-top-huge">
        <a href="#" className="btn btn--green">Discover all tours</a>
      </div>

    </section>
  );
}