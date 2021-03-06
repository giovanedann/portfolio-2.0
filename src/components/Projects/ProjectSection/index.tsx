import ProjectCard from "../ProjectCard";
import { ProjectSectionContainer, ProjectCardsContainer } from "./styles";
import { projects } from '../data';

const ProjectSection: React.FC = () => {
  return (
    <ProjectSectionContainer id="Projects">
      <h1>Projects</h1>
      <div className="purple-line"></div>
      <ProjectCardsContainer>
        {
          projects.map((project) => (
            <ProjectCard
              key={ project.name + project.description }
              name={ project.name }
              description={ project.description }
              technologies={ project.technologies }
              repository={ project.repository }
              deploy={ project.deploy }
              image={ project.image }
            />
          ))
        }
      </ProjectCardsContainer>
    </ProjectSectionContainer>
  )
}

export default ProjectSection;
