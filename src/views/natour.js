import React, { Component } from 'react';
import AppHeader from "./../components/AppHeader";
import AppMain from "../components/AppMain";

export default class Home extends Component {
  render() {
    return (
      <div class="natour">
        <AppHeader />
        <AppMain />
      </div>
    );
  }
} 