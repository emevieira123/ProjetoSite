import Header from "../Components/Header/header";
import './contato.css';


function Contato() {
  return (
    <div>
      <div className="headerSemOpacity"></div>
      <Header />
      <div className="contatoContainer">

        <h1>Formulário para Contato</h1>

        <div className="containerForm">

          <input className="contato-nome" type="text" placeholder="Nome" />
          <input className="contato-email" type="text" placeholder="E-mail" />
          <input className="contato-telefone" type="text" placeholder="Telefone" />

          <textarea type="text" placeholder="Digite sua mensagem aqui..." />

          <button type="submit">Enviar</button>

        </div>

        <div className="containerLateral-direito">

          <img src="https://take.net/blog/wp-content/uploads/2019/04/blip-academy.png" alt="" />

        </div>

        <div className="footer">

          <a href="https://www.linkedin.com/in/emerson-vieira-9416267b/" target="_blank" rel="noreferrer">
            <img className="redeSociais" src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG26.png" alt="Logo Linkedin" />
          </a>
          <a href="https://github.com/emevieira123/" target="_blank" rel="noreferrer">
            <img className="redeSociais" src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png" alt="Logo GitHub" />
          </a>
          <a href="https://www.facebook.com/emersonvie" target="_blank" rel="noreferrer">
            <img className="redeSociais" src="https://folhadealagoas.com.br/wp-content/uploads/2020/02/logo_facebook.png" alt="Logo Facebook" />
          </a>
          <a href="https://www.instagram.com/emerson_vchaves/" target="_blank" rel="noreferrer">
            <img className="redeSociais" src="https://pastorcleitoncollins.com.br/wp-content/uploads/2018/07/log-instagram.png" alt="Logo Instagram" />
          </a>

          <p className="copyright">VieiraDevCode © 2021 - Todos os direitos reservados.</p>

        </div>

      </div>
    </div>
  );
}
export default Contato;
