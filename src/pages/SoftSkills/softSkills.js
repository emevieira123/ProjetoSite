import SkillCard from '../Components/Cards/skillCard';
import Header from '../Components/Header/header';
import './softSkills.css';

function SoftSkills() {
  return (
    <div className="skillsContainer">
      <img src="/assets/fundo-skills.png" alt="fundo skills" />
      <Header />
      <div className="skillsContainer-opacity">
      </div>
      <SkillCard />
    </div>
  );
}
export default SoftSkills;
