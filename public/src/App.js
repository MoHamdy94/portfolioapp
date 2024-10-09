import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./components/Blog/Blog"; 
import {Detail} from  './components/Detail/Detail'
import Category from "./components/Category/Category";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Blog} />
        <Route path="/details/:id" component={Detail} />
        <Route path="/category/:category" component={Category} />
      </Switch>
    </Router>
  );
}

export default App;
