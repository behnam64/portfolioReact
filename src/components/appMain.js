import React from "react";
import About from "./About";
import Features from "./Features";

export default function appMain(props) {
  return(
    <main className="app-main">
      <About />
      <Features />
    </main>
  );
}