import { FooterStyles } from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterStyles>
      <div className="gray-line"></div>
      <p>
        ©️ 2022 - Designed and built by Giovane Saes with Typescript, React,
        Framer Motion and Styled Components. 💅🏻
      </p>
    </FooterStyles>
  );
};

export default Footer;
