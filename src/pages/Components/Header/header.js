import './header.css';

import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header-home">
      <p>VieiraDevCode</p>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button>Home</button>
      </Link>
      <Link
        activeClass="active"
        to="sobre"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button>Sobre mim</button>
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button>Soft Skills</button>
      </Link>
      <Link
        activeClass="active"
        to="contato"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button>Contato</button>
      </Link>

    </div>
  );
}
export default Header;
