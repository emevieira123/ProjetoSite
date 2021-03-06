import Header from "../Components/Header/header";
import './contato.css';


function Contato() {
  return (
    <div>
      <div className="headerSemOpacity"></div>
      <Header />
      <div className="contatoContainer">

        <div className="containerForm">

          <input type="text" placeholder="Informe seu e-mail..." />

          <textarea type="text" placeholder="Digite sua mensagem aqui..." />

          <button type="submit">Enviar</button>


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
