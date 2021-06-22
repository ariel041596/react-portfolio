import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HomeScreen from "./screens/HomeScreen";
import ProjectScreen from "./screens/ProjectScreen";
import EventScreen from "./screens/EventScreen";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/projects/:id" component={ProjectScreen} exact></Route>
        <Route path="/events/:id" component={EventScreen} exact></Route>
      </Router>
    </div>
  );
}

export default App;
