import React from "react";
import styled from "styled-components";

function Card(props) {
  const Card = styled.div`
    .description {
      display: none;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
    width: 250px;
    height: 250px;
    max-width: 250px;
    max-height: 250px;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    background-image: url(${props.image});

    &:hover .description {
      display: flex;
      color: black;
      width: 250px;
      height: 250px;
      background-color: ${props.color};
      font-weight: bold;
      align-items: inherit;
      justify-content: center;
    }
  `;

  return (
    <Card>
      <p className="description">{props.description}</p>
    </Card>
  );
}
export default Card;
