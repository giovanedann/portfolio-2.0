import { ContactContainer, ContactTextsContainer } from "./styles";
import { SiGithub, SiLinkedin  } from 'react-icons/si'

const Contact: React.FC = () => {
  return (
    <ContactContainer id="Contact">

      <h1>Contact me</h1>
      <div className="purple-line"></div>
      <ContactTextsContainer>
        <p>I am currently <span>open to work</span> and available to get involved in new projects.</p>
        <p>Mail me at <a href="mailto:giovanes.dev@gmail.com">giovanes.dev@gmail.com</a></p>
        <p>Or get in touch:</p>
        <div className="social-icons-container">
          <a href="https://github.com/giovanedann" id="github-link" target="_blank">
            <SiGithub className="social-icon github" />
          </a>
          <a href="https://www.linkedin.com/in/giovane-saes-a53b38196/" id="linkedin-link" target="_blank">
            <SiLinkedin className="social-icon linkedin" />
          </a>
        </div>
      </ContactTextsContainer>

    </ContactContainer>
  )
}

export default Contact;