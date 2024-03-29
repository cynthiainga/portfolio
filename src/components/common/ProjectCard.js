import React from 'react';
import { IconContext } from 'react-icons';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import PropTypes from 'prop-types';
import truncateStr from '../utils/truncateStr';

const ProjectCard = ({ project }) => (
  <>
    <div
      href="#f"
      className="project-item-wrapper"
      data-aos={project.animation}
    >
      <h3 className="project-title">{project.title}</h3>
      <p className="project-details">
        {truncateStr(project.description, 100)}
      </p>
      <div className="project-links">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
          Live Demo
          {' '}
          <IconContext.Provider value={{ className: 'project-link' }}>
            <FiExternalLink />
          </IconContext.Provider>
        </a>
        <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer">
          Source code
          <IconContext.Provider value={{ className: 'project-link' }}>
            <AiFillGithub />
          </IconContext.Provider>
        </a>
      </div>
      <div className="project-technology-tags">
        {project.technologies.map((techno) => (
          <div key={techno.id} className="project-tag">
            {techno.name}
          </div>
        ))}
      </div>
      <div className="project-images-preview">
        <img src={project.image} alt="" />
      </div>
    </div>
  </>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    animation: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    demoLink: PropTypes.string.isRequired,
    sourceCodeLink: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
