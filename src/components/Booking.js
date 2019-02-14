import React from "react";
import AppForm from "./AppForm"
import "./Booking.scss";

export default function booking (props) {
  return(
    <section className="section-book">

      <div className="row">
        <div className="book">
          <div className="book__form">

            <AppForm />

          </div>
        </div>
      </div>

    </section>
  );
}