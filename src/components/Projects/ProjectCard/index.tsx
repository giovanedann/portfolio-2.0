import { ProjectCardContainer } from "./styles";
import { HiExternalLink } from "react-icons/hi";

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  repository: string;
  deploy: string;
  image: any;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <ProjectCardContainer>
      <div className="project-image-container">
        <img className="project-image" src={props.image} alt={props.name} />
      </div>

      <div className="info-container">
        <p className="project-name">{props.name}</p>
        <p className="project-description">{props.description}</p>

        <div className="project-techs">
          {props.technologies.map((item, index) => (
            <span className="tech" key={item + index}>
              {item}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a target="_blank" href={props.repository}>
            Repository <HiExternalLink className="icon" size={16} />
          </a>
          {props.deploy && (
            <a target="_blank" href={props.deploy}>
              Live preview <HiExternalLink className="icon" size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="purple-line"></div>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
