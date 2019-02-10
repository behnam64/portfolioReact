import React, { Component } from 'react';
import AppHeader from "./../components/AppHeader";
import About from "../components/About";

export default class Home extends Component {
  render() {
    return (
      <div class="natour">
        <AppHeader />
        <About />
      </div>
    );
  }
} 