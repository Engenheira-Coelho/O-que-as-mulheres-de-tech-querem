import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="container">
        <div className="header-wrapper">
          <p>Próposito do projeto</p>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>

          <a
            href="https://github.com/Engenheira-Coelho/O-que-as-mulheres-de-tech-querem"
            alt="link para github do projeto"
            target="_blank"
            rel="noreferrer"
          >
            Acesse o github do projeto
          </a>
        </div>
      </footer>
    );
  }
}
