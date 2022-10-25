import React from "react";
import "./card.css";

function Card(props) {

  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundColor: `${props.color}`,
      }} 
      title={props.image_description}
    >
      <p className="description">{props.description}</p>
    </div>
  );
}
export default Card;