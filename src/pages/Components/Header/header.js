import './header.css';
const Home = () => {
  return window.location.href = '/';
}
const Sobre = () => {
  return window.location.href = '/sobre';
}
const Skills = () => {
  return window.location.href = '/softSkills';
}
const Contato = () => {
  return window.location.href = '/contato';
}

const Header = () => {
  return (
    <div className="header-home">
      <p>VieiraDevCode</p>
      <button onClick={Home}>Home</button>
      <button onClick={Sobre}>Sobre mim</button>
      <button onClick={Skills}>Soft Skills</button>
      <button onClick={Contato}>Contato</button>
    </div>
  );
}
export default Header;
