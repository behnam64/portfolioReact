import React from "react";
import About from "./About";
import Features from "./Features";
import Tours from "./Tours";
import Stories from "./Stories";
import Booking from "./Booking";

export default function appMain(props) {
  return(
    <main className="app-main">
      <About />
      <Features />
      <Tours tours={props.tours}/>
      <Stories stories={props.stories}/>
      <Booking />
    </main>
  );
}