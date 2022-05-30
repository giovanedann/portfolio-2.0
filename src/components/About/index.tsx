import { AboutSection, SkillsSection, AboutContainer } from "./styles";
import { skills } from "./data";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const About: React.FC = () => {
  const { text } = useTypewriter({
    words: ['Sass', 'Saes'],
    loop: 1,
  })

  return (
    <AboutContainer>

      <AboutSection>
        <div className="description">
          <h1>Giovane <span>{ text }<Cursor /></span></h1>
          <h2 id="About">Front-End Developer</h2>
          <div className="line"></div>
          <p><span>Hello 👋, i'm Giovane!</span> A Front-End Developer based in São Paulo, Brazil.</p>
          <p>Since i finished my degree in Mechanical Engineering, i started to program things using VBA and Excel.</p> 
          <p>After seeing the power of programming, i started learning JavaScript and fell in love with web development, specially Front-End.</p>
          <p>I am really passionate about solving problems and <span>i'm open for work! <span className="emoji">😁</span></span></p>
        </div>
      </AboutSection>

      <SkillsSection>
        <h1>Skills</h1>
        <div className="line"></div>
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
