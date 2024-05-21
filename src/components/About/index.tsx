import { Cursor, useTypewriter } from "react-simple-typewriter";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { skills } from "./data";
import {
  AboutContainer,
  AboutSection,
  SkillContainer,
  SkillsSection,
} from "./styles";

const About: React.FC = () => {
  const { text } = useTypewriter({
    words: ["Sass", "Saes"],
    loop: 1,
  });

  const { innerWidth } = useWindowDimensions();

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
            <span>Hello, i'm Giovane!</span> A Full-Stack Developer based in
            São Paulo, Brazil.
          </p>
          <p>
            I am a passionate developer currently working on 2 Software Development companies, one in Brazil (BWS IoT), and one in USA (IntegrateIQ).
          </p>
          <p>
            On BWS, my main tasks are to improve the client side of the softwares built with Typescript, React and React Native. But when needed, i love to jump on the server side to create new use cases.
          </p>
          <p>
            On IntegrateIQ, my main tasks are to create new Python scripts and add endpoints and stuff to the API.
          </p>
          <p>
            I am a competitive folk which is always trying to improve. I am never happy with my current state, because i know i can do more.
          </p>
          <p>
            If you're interested in talking to me, feel free to reach me, the
            details about my socials are in this{" "}
            <a href="#Contact">
              <span>section</span>
            </a>
            .
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
                transition: {
                  delay: innerWidth > 1200 ? index * 0.1 : Math.random() - 0.5,
                  bounce: 0.5,
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
