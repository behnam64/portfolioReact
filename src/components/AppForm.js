import React from "react";

export default function appForm() {
  return(
    <form action="#" className="form">
      <div className="u-margin-bottom-medium">
        <h2 className="heading-secondary text-gradient">start booking now!</h2>
      </div>

      <div className="form__group">
        <input id="name" type="text" className="form__input" placeholder="Full name" required/>
        <label htmlFor="name" className="form__label">Full name</label>
      </div>

      <div className="form__group">
        <input id="email" type="email" className="form__input"placeholder="Email address" required/>
        <label htmlFor="email" className="form__label">Email address</label>
      </div>

      <div className="form__group">

        <div className="form__radio-group">
          <input name="size" id="small" type="radio" className="form__radio-input"/>
          <label htmlFor="small" className="form__radio-label">
          <span className="form__radio-button"></span>
            Small tour group
          </label>
        </div>

        <div className="form__radio-group">
          <input name="size" id="large" type="radio" className="form__radio-input"/>
          <label htmlFor="large" className="form__radio-label">
            <span className="form__radio-button"></span>
            large tour group
          </label>
        </div>

        <div className="form__group">
          <button className="btn btn--green u-margin-bottom-small">
            Next step &rarr;
          </button>
        </div>

      </div>

    </form>
  );
}