import {
  AboutSection,
  SkillsSection,
  AboutContainer,
  SkillContainer,
} from "./styles";
import { skills } from "./data";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { fade } from "../../animations";

const About: React.FC = () => {
  const { text } = useTypewriter({
    words: ["Sass", "Saes"],
    loop: 1,
  });

  return (
    <AboutContainer>
      <AboutSection
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
      >
        <div className="description">
          <h1>
            Giovane{" "}
            <span>
              {text}
              <Cursor />
            </span>
          </h1>
          <h2 id="About">Front-End Developer</h2>
          <div className="line"></div>
          <p>
            <span>Hello 👋, i'm Giovane!</span> A Front-End Developer based in
            São Paulo, Brazil.
          </p>
          <p>
            Since i finished my degree in Mechanical Engineering, i started to
            program things using VBA and Excel.
          </p>
          <p>
            After seeing the power of programming, i started learning JavaScript
            and fell in love with web development, specially Front-End.
          </p>
          <p>
            I am really passionate about solving problems and{" "}
            <span>
              i'm open for work! <span className="emoji">😁</span>
            </span>
          </p>
        </div>
      </AboutSection>

      <SkillsSection
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
      >
        <h1>Skills</h1>
        <div className="line"></div>
        <div className="skills-container">
          {skills.map(({ name, svg, color }, index) => (
            <SkillContainer
              initial={{ opacity: 0, y: -70 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1, bounce: 0.5 },
              }}
              whileHover={{
                y: -10,
                transition: {
                  type: "spring",
                  bounce: 0.7,
                  duration: 0.2,
                },
              }}
              key={name}
              color={color}
            >
              {svg}
              <p>{name}</p>
            </SkillContainer>
          ))}
        </div>
      </SkillsSection>
    </AboutContainer>
  );
};

export default About;
