import React, { Component } from 'react';
import './card.css';

export default class Card extends Component {

  render() {
    return(
      <header className="container">
        <p>
          Hello! I'm a card.
        </p>
      </header>
    )
  }
}