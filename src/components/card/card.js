import React from "react";
import "./card.css";

function Card(props) {
  console.log(props)
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundColor: `${props.color}`,
        
      }}
      alt={props.image_description}
    >
      <p className="description">{props.description}</p>
    </div>
  );
}
export default Card;