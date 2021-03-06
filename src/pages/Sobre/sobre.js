import Header from '../Components/Header/header';
import './sobre.css';


function Sobre() {
  return (
    <div>
      <div className="headerSemOpacity"></div>
      <Header />
      <div className="containerSobre">

        <div className="containerEsquerdo">
          <img src="/assets/Mobile.png" alt="" />
        </div>

        <div className="containerDireito">
          <div className="linhaTop"></div>
          <div className="linhaBotton"></div>
          <div className="containerTexto">
            <p className="textoSobre">
              Tenho 31 anos, sou graduando em
              Análise e Desenvolvimento de Sistemas
              pela Fatec Senai. Atualmente tenho melhorado
              minhas habilidades no desenvolvimento web
              front-end e back-end realizando cursos na área
              e criando pequenos projetos próprios.
            </p>
            <p className="textoSobre">
              Meus hobbies são:
              Futebol, ouvir música, buscar certificações,
              ouvir podcasts sobre programação,
              passear com a família…
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Sobre;
