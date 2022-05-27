import { description } from "./data";
import { AboutSection, SkillsSection, AboutContainer } from "./styles";

import { skills } from "./data";

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutSection>
        <div className="description">
          <h1>Giovane Saes</h1>
          <h2>Front-End Developer</h2>
          <p>{ description }</p>
        </div>
      </AboutSection>
      <SkillsSection>
        <h1>Skills</h1>
        <div className="skills-container">
          {
            skills.map(({ name, svg}) => (
              <div key={ name } className="skill-container">
                { svg }
                <p>{ name }</p>
              </div>
            ))
          }
        </div>
      </SkillsSection>
    </AboutContainer>
  )
}

export default About;
