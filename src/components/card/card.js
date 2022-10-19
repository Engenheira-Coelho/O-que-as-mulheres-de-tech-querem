import React, { Component } from "react";
import "./card.css";

export default class Card extends Component {
  render() {
    return (
      <div
        className="card"
        style={{ backgroundImage: `url(${this.props.imageUrl})` }}
      >
        <p className="comment">{this.props.comment}</p>
      </div>
    );
  }
}
