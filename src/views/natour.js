import React, { Component } from 'react';
import AppHeader from "./../components/AppHeader";
import AppMain from "../components/AppMain";

export default class Home extends Component {
  state = {
    tours: [
      {
        id: 1,
        heading: "the sea explorer",
        price: 297,
        details:[
          "3 day tours",
          "Up to 30 people",
          "2 tour guides",
          "Sleep in cosy hotels",
          "Difficulty: easy",
        ]
      },

      {
        id: 2,
        heading: "The forest hiker",
        price: 497,
        details:[
          "7 day tours",
          "Up to 40 people",
          "6 tour guides",
          "Sleep in provided tents",
          "Difficulty: medium",
        ]
      },

      {
        id: 3,
        heading: "The snow adventurer",
        price: 897,
        details:[
          "5 day tours",
          "Up to 15 people",
          "3 tour guides",
          "Sleep in provided tents",
          "Difficulty: hard",
        ]
      },
    ],
    stories: [
      {
        name: "Mary Smith",
        picture: "nat-8",
        heading: "i had the best week ever with my family",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, qui assumenda architecto esse corporis numquam optio amet placeat a nam alias dignissimos quod inventore consectetur distinc. elit. Illum, qui assumenda architecto esse corporis numquam optio amet placeat a nam alias dignissimos."
      },
      {
        name: "Jack Willson",
        picture: "nat-9",
        heading: "wow! my life is completely different now",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, qui assumenda architecto esse corporis numquam optio amet placeat a nam alias dignissimos quod inventore consectetur distinc. elit. Illum, qui assumenda architecto esse corporis numquam optio amet placeat a nam alias dignissimos."
      },
    ]
  }
  render() {
    return (
      <div class="natour">
        <AppHeader />
        <AppMain tours={this.state.tours} stories={this.state.stories}/>
      </div>
    );
  }
} 