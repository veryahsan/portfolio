import { FC } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './ProjectCard.scss';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}) => {
  return (
    <div className="project-card">
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__technologies">
          {technologies.map((tech) => (
            <span key={tech} className="project-card__tech">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-card__links">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              <FiGithub /> Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
