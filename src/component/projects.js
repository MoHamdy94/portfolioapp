import React, { useState } from "react";
import "./projects.css"


const projects = [
  { id: 'HTML1', title: 'Personal Blog Website', description: 'Create a static personal blog site using HTML', img: "https://static.wixstatic.com/media/6542d9_52db1f3a9f644689b163df23cd98c37b~mv2.jpg", },
  { id: 'React1', title: 'To-Do List Application', description: 'Build a dynamic to-do list app using React', img: "https://www.projectmanager.com/wp-content/uploads/2023/06/Trello-kanban-board.webp", },
  { id: 'JavaScript1', title: 'Quiz Application', description: 'Develop a quiz application using JavaScript', img: "https://realpython.com/cdn-cgi/image/width=640,format=auto/https://files.realpython.com/media/Build-a-Quiz-Application_Watermarked.373436013115.jpg", },
  { id: 'HTML2', title: 'Portfolio Website', description: 'Design a personal portfolio using only HTML and CSS', img: "https://essential-addons.com/wp-content/uploads/2023/12/Untitled-1-1024x589.jpg", },
  { id: 'HTML3', title: 'Documentation Site', description: 'Create a documentation website for a fictional product', img: "https://betterdocs.co/wp-content/uploads/2022/03/How-to-create-a-separate-documentation-site-with-WordPress.png", },
  { id: 'HTML4', title: 'Recipe Book', description: 'Build a recipe book website using HTML', img: "https://www.theidearoom.net/wp-content/uploads/2014/05/Recipe-Book-7-2.png", },
  { id: 'HTML5', title: 'Product Landing Page', description: 'Design a landing page for a fictional product', img: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/2778/posts/32174/image-upload/proland_landing_page_product.jpg", },
  { id: 'JavaScript2', title: 'Interactive Photo Gallery', description: 'Create an interactive photo gallery', img: "https://alvaromontoro.com/images/blog/gallery-0.webp", },
  { id: 'JavaScript3', title: 'Expense Tracker', description: 'Build an expense tracker application', img: "https://raketcontent.com/1/expense_tracker_google_sheets_1_fb24859e04.png", },
  { id: 'JavaScript4', title: 'Rock, Paper, Scissors Game', description: 'Create a rock, paper, scissors game', img: "https://img.freepik.com/premium-vector/hands-playing-rock-paper-scissors-game-flat-design-style-vector-illustration_540284-598.jpg?w=1060", },
  { id: 'JavaScript5', title: 'Countdown Timer', description: 'Develop a countdown timer that takes user input', img: "https://theroundpie.com/assets/images/blog/Clock-Hourglass.jpg", },
  { id: 'React2', title: 'Weather Forecast App', description: 'Create a weather forecasting application', img: "https://img.freepik.com/premium-vector/weather-forecast-widget-collection-icon-mobile-application-program-with-rain-cloud-sun-snowing-windy-sunlight-symbol-vector-illustration-concept_38364-159.jpg?w=996", },
  { id: 'React3', title: 'E-commerce Product Page', description: 'Build a product display page using React', img: "https://cxl.com/wp-content/uploads/2019/02/cxl-ecommerce-example-right-8.1.png", },
  { id: 'React4', title: 'Task Management', description: 'Create a task management dashboard', img: "https://www.dragapp.com/wp-content/uploads/2020/07/meister-2-768x423.png", },
  { id: 'React5', title: 'Movie Search Application', description: 'Develop a movie search application', img: "https://d2908q01vomqb2.cloudfront.net/b6692ea5df920cad691c20319a6fffd7a4a766b8/2024/05/27/BDB-3956-Picture13.png", },

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
        <button className={filter === 'All' ? 'active' : ''} onClick={() => handleFilter('All')}>All projects</button>
        <button className={filter === 'HTML' ? 'active' : ''} onClick={() => handleFilter('HTML')}>HTML & CSS</button>
        <button className={filter === 'JavaScript' ? 'active' : ''} onClick={() => handleFilter('JavaScript')}>JavaScript</button>
        <button className={filter === 'React' ? 'active' : ''} onClick={() => handleFilter('React')}>React</button>
      </section>

      <section className="right-section">
        {filteredProjects.map((project) => {
          return (
            <article key={project.id} className="card">
              <img src={project.img} alt={project.title} />
              <div className="box">
                <h1 className="title">{project.title}</h1>
                <p className="sub-title">{project.description}</p>
                <div className="details">
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