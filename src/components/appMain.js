import React from "react";
import About from "./About";
import Features from "./Features";
import Tours from "./Tours";
import Stories from "./Stories";

export default function appMain(props) {
  return(
    <main className="app-main">
      <About />
      <Features />
      <Tours />
      <Stories />
    </main>
  );
}