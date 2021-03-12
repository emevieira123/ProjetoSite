import React from 'react'
import Header from '../Components/Header/header';

import './home.css'

const GitHub = () => {
  return window.location.href = 'https://github.com/emevieira123/';
}

function Home() {
  return (
    <div className="container-home">

      <img src="/assets/Fundo.png" alt="fundo home" />

      <Header />

      <div className="texto-home">
        <p>Olá sou,</p>

        <b>Emerson Vieira</b>

        <p>
          Desenvolvedor full stack junior, <br />
          apaixonado em solucionar problemas <br />
          utilizando programação.
        </p>

        <button onClick={GitHub}>GitHub</button>
      </div>

    </div>
  );
}

export default Home;
