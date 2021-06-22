import React, { useState } from "react";

import TopBar from "../components/topbar/TopBar";
import Introduction from "../components/introduction/Introduction";
import Portfolio from "../components/portfolio/Portfolio";
import Work from "../components/works/Work";
import TechnologyStack from "../components/techstack/TechnologyStack";
// import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import Events from "../components/events/Events";
import Menu from "../components/menu/Menu";

import "../app.scss";

const HomeScreen = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></TopBar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Introduction></Introduction>
        <Portfolio></Portfolio>
        <Work></Work>
        <TechnologyStack></TechnologyStack>
        {/* <Testimonials></Testimonials> */}
        <Events></Events>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default HomeScreen;
