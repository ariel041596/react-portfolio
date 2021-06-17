import React, { useState } from "react";

import TopBar from "./components/topbar/TopBar";
import Introduction from "./components/introduction/Introduction";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/works/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";

import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></TopBar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Introduction></Introduction>
        <Portfolio></Portfolio>
        <Work></Work>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
