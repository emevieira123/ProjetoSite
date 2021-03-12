import Contato from '../Contato/contato';
import Home from '../Home/home';
import Sobre from '../Sobre/sobre';
import SoftSkills from '../SoftSkills/softSkills';
import './section.css';

const Sections = () => {
  return (
    <>
      <section>
        <section id="home">
          <Home />
        </section>
        <section id="sobre">
          <Sobre />
        </section>
        <section id="skills">
          <SoftSkills />
        </section>
        <section id="contato">
          <Contato />
        </section>
      </section>
    </>
  );
}

export default Sections;
