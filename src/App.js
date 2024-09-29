import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './component/projects';
import ProjectDetails from './component/Projectdetails';



function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
