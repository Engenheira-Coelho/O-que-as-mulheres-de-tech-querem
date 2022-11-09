import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {

  render() {
    return(
      <header className="footer">
        {/* <button>Voltar ao topo</button> */}
        <p className="title">
          PROPÓSITO DO PROJETO
        </p>
        <br/>
        <p className="description">
          O projeto o que as mulheres de tech querem têm o objetivo de demonstrar quais são as situações relacionadas a projetos de desenvolvimento de software que fazem com que as mulheres se sintam respeitadas e reconhecidas profissionalmente. Além disso, todo o desenvolvimento desse projeto foi feito por mulheres voluntárias, que trouxeram sua capacidade técnica em discussões coletivas, pair programmings e decisões de projeto. Então, o objetivo desse projeto também é ensinar e compartilhar conhecimento.
        </p>
        {/* <link>O QUE AS MULHERES QUEREM? - 2022</link> */}
      </header>
    )
  }
}