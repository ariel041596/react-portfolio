// import React from 'react'
import "./topbar.scss";
import { Call, Mail } from "@material-ui/icons";

import { useHistory } from "react-router-dom";

const TopBar = ({ menuOpen, setMenuOpen }) => {
  // variables
  const history = useHistory();

  // Methods
  const handleIntro = () => {
    history.push("/");
  };
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div onClick={handleIntro}>
            <a href="#introduction" className="logo">
              Ariel Espinoza
            </a>
          </div>
          <div className="itemContainer">
            <Call className="icon"></Call>
            <span>+63-916-665-2324</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"></Mail>
            <span>ariel.espinoza041@gmail.com</span>
            {/* <ListItem
              className={
                locationActive.pathname === route.to ? classes.active : null
              }
              button
              key={route.to}
              component={Link}
              to={route.to}
            > */}
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
