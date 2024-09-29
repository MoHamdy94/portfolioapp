import React, { useState } from "react";
import "./projects.css"


const projects = [
  { id: 'HTML1', title: 'Personal Blog Website', description: 'Create a static personal blog site using HTML', img: "https://via.placeholder.com/300x200?", },
  { id: 'React1', title: 'To-Do List Application', description: 'Build a dynamic to-do list app using React', img: "https://via.placeholder.com/300x200?", },
  { id: 'JavaScript1', title: 'Quiz Application', description: 'Develop a quiz application using JavaScript', img: "https://via.placeholder.com/300x200?", },
  { id: 'HTML2', title: 'Portfolio Website', description: 'Design a personal portfolio using only HTML and CSS', img: "https://via.placeholder.com/300x200?", },
  { id: 'HTML3', title: 'Documentation Site', description: 'Create a documentation website for a fictional product', img: "https://via.placeholder.com/300x200?", },
  { id: 'HTML4', title: 'Recipe Book', description: 'Build a recipe book website using HTML', img: "https://via.placeholder.com/300x200?", },
  { id: 'HTML5', title: 'Product Landing Page', description: 'Design a landing page for a fictional product', img: "https://via.placeholder.com/300x200?", },
  { id: 'JavaScript2', title: 'Interactive Photo Gallery', description: 'Create an interactive photo gallery', img: "https://via.placeholder.com/300x200?", },
  { id: 'JavaScript3', title: 'Expense Tracker', description: 'Build an expense tracker application', img: "https://via.placeholder.com/300x200?", },
  { id: 'JavaScript4', title: 'Rock, Paper, Scissors Game', description: 'Create a rock, paper, scissors game', img: "https://via.placeholder.com/300x200?", },
  { id: 'JavaScript5', title: 'Countdown Timer', description: 'Develop a countdown timer that takes user input', img: "https://via.placeholder.com/300x200?", },
  { id: 'React2', title: 'Weather Forecast App', description: 'Create a weather forecasting application', img: "https://via.placeholder.com/300x200?", },
  { id: 'React3', title: 'E-commerce Product Page', description: 'Build a product display page using React', img: "https://via.placeholder.com/300x200?", },
  { id: 'React4', title: 'Task Management', description: 'Create a task management dashboard', img: "https://via.placeholder.com/300x200?", },
  { id: 'React5', title: 'Movie Search Application', description: 'Develop a movie search application', img: "https://via.placeholder.com/300x200?", },

];

const Projects = () => {

  const [filter, setFilter] = useState('All');

  const handleFilter = (filterId) => {
    setFilter(filterId);
  };

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.id.startsWith(filter));

  return (
    <main className="all-section">

      <section className="left-section">
        <button className='active' onClick={() => handleFilter('All')}>All projects</button>
        <button onClick={() => handleFilter('HTML')}>HTML & CSS</button>
        <button onClick={() => handleFilter('JavaScript')}>JavaScript</button>
        <button onClick={() => handleFilter('React')}>React</button>
      </section>

      <section className="right-section">
        {filteredProjects.map((project) => {
          return (
            <article key={project.id} className="card">
              <img src={project.img} alt={project.title} />
              <div className="box">
                <h1>{project.title}</h1>
                <p className="sub-title">{project.description}</p>
                <div className="flex">
                  <a href={`/projects/${project.id}`}>View Details</a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Projects;