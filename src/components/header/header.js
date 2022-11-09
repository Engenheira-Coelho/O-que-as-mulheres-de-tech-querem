import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {

  render() {
    return(
      <header className="header">
        <img src={"https://raw.githubusercontent.com/Engenheira-Coelho/O-que-as-mulheres-de-tech-querem/main/src/general/images/img_header_1.png"} />
        <p>
          O QUE AS MULHERES DE TECH QUEREM?
        </p>
      </header>
    )
  }
}