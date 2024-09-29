import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
  const { id } = useParams(); 

  const project = {
    id: id,
    title: `Project ${id}`,
    description: `This is the detailed description of Project ${id}. It contains all the relevant information about the project, including technologies used and challenges faced.`,
    image: `https://via.placeholder.com/600x400?text=Project+${id}`,
  };

  return (
    <div className="container project-details mt-5">
    <div className="row">
      <div className="col-md-6">
        <img src={project.image} alt={project.title} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  </div>
);
}

export default ProjectDetails;
