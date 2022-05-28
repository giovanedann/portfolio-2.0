import { ProjectCardContainer } from './styles';
import { HiExternalLink }from 'react-icons/hi';

interface ProjectCardProps {
  name: string
  description: string
  technologies: string[]
  repository: string
  deploy: string
  image: any
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <ProjectCardContainer>

      <div className="project-image-container">
        <img className="project-image" src={ props.image } alt={props.name} />
      </div>
      
      <div className="info-container">

        <p className="project-name">{ props.name }</p>
        <p className="project-description">{ props.description }</p>

        <div className="project-techs">
          { props.technologies.map((item) => (
            <span className="tech">{ item }</span>
          ))}
        </div>

        <div className="project-links">
          <a target="_blank" href={ props.repository }>Repository <HiExternalLink size={ 13 } /></a>
          <a target="_blank" href={props.deploy}>Deploy <HiExternalLink size={ 13 } /></a>
        </div>

      </div>

      <div className="purple-line"></div>

    </ProjectCardContainer>
  )
}

export default ProjectCard;
