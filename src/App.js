import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./component/projects";
import ProjectDetails from "./component/Projectdetails";
import Header from "./component/1-Header/header";
import Contact from "./component/4-Contact/contact";
import Hero from "./component/2-Hero/hero";
// import ScrollToTop from 'react-scroll-to-top';



const projects = [
  {
    id: "1",
    sub: "HTML",
    title: "Personal Blog Website",
    description: "Create a static personal blog site using HTML",
    img: "https://static.wixstatic.com/media/6542d9_52db1f3a9f644689b163df23cd98c37b~mv2.jpg",
  },
  {
    id: "2",
    sub: "React",
    title: "To-Do List Application",
    description: "Build a dynamic to-do list app using React",
    img: "https://www.projectmanager.com/wp-content/uploads/2023/06/Trello-kanban-board.webp",
  },
  {
    id: "3",
    sub: "JavaScript",
    title: "Quiz Application",
    description: "Develop a quiz application using JavaScript",
    img: "https://realpython.com/cdn-cgi/image/width=640,format=auto/https://files.realpython.com/media/Build-a-Quiz-Application_Watermarked.373436013115.jpg",
  },
  {
    id: "4",
    sub: "HTML",
    title: "Portfolio Website",
    description: "Design a personal portfolio using only HTML and CSS",
    img: "https://essential-addons.com/wp-content/uploads/2023/12/Untitled-1-1024x589.jpg",
  },
  {
    id: "5",
    sub: "HTML",
    title: "Documentation Site",
    description: "Create a documentation website for a fictional product",
    img: "https://betterdocs.co/wp-content/uploads/2022/03/How-to-create-a-separate-documentation-site-with-WordPress.png",
  },
  {
    id: "6",
    sub: "HTML",
    title: "Recipe Book",
    description: "Build a recipe book website using HTML",
    img: "https://www.theidearoom.net/wp-content/uploads/2014/05/Recipe-Book-7-2.png",
  },
  {
    id: "7",
    sub: "HTML",
    title: "Product Landing Page",
    description: "Design a landing page for a fictional product",
    img: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/2778/posts/32174/image-upload/proland_landing_page_product.jpg",
  },
  {
    id: "8",
    sub: "JavaScript",
    title: "Interactive Photo Gallery",
    description: "Create an interactive photo gallery",
    img: "https://alvaromontoro.com/images/blog/gallery-0.webp",
  },
  {
    id: "9",
    sub: "JavaScript",
    title: "Expense Tracker",
    description: "Build an expense tracker application",
    img: "https://raketcontent.com/1/expense_tracker_google_sheets_1_fb24859e04.png",
  },
  {
    id: "10",
    sub: "JavaScript",
    title: "Rock, Paper, Scissors Game",
    description: "Create a rock, paper, scissors game",
    img: "https://img.freepik.com/premium-vector/hands-playing-rock-paper-scissors-game-flat-design-style-vector-illustration_540284-598.jpg?w=1060",
  },
  {
    id: "11",
    sub: "JavaScript",
    title: "Countdown Timer",
    description: "Develop a countdown timer that takes user input",
    img: "https://theroundpie.com/assets/images/blog/Clock-Hourglass.jpg",
  },
  {
    id: "12",
    sub: "React",
    title: "Weather Forecast App",
    description: "Create a weather forecasting application",
    img: "https://img.freepik.com/premium-vector/weather-forecast-widget-collection-icon-mobile-application-program-with-rain-cloud-sun-snowing-windy-sunlight-symbol-vector-illustration-concept_38364-159.jpg?w=996",
  },
  {
    id: "13",
    sub: "React",
    title: "E-commerce Product Page",
    description: "Build a product display page using React",
    img: "https://cxl.com/wp-content/uploads/2019/02/cxl-ecommerce-example-right-8.1.png",
  },
  {
    id: "14",
    sub: "React",
    title: "Task Management",
    description: "Create a task management dashboard",
    img: "https://www.dragapp.com/wp-content/uploads/2020/07/meister-2-768x423.png",
  },
  {
    id: "15",
    sub: "React",
    title: "Movie Search Application",
    description: "Develop a movie search application",
    img: "https://d2908q01vomqb2.cloudfront.net/b6692ea5df920cad691c20319a6fffd7a4a766b8/2024/05/27/BDB-3956-Picture13.png",
  },
];
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Hero />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <footer />
        {/* <ScrollToTop
          style={{
            width: "2",
            height: "2",
            borderRadius: "50%",
            border: "1px solid #3fff",
            fontSize: "1px",
          }}
          className="smothy"
        ></ScrollToTop> */}
        <Routes>
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route
            path="/projects/:id"
            element={<ProjectDetails projects={projects} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
