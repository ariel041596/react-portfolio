import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";

import TopBar from "../components/topbar/TopBar";
import Menu from "../components/menu/Menu";

const ProjectScreen = ({ match, history }) => {
  // Variables
  const [menuOpen, setMenuOpen] = useState(false);
  const projectID = match.params.id;

  // Methods
  // const viewGithub = () => {
  //   window.open(data.githubURL, "_blank").focus();
  // };

  const goBack = () => {
    history.goBack();
  };

  // UseEffect
  // useEffect(() => {
  //   const projectData = projects.find((proj) => proj._id === Number(projectID));
  //   setData(projectData);
  //   setStacks(projectData.stacks);
  // }, [projectID]);

  return (
    <>
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></TopBar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Container>
        <Button
          onClick={goBack}
          style={{ marginTop: "100px" }}
          variant="outlined"
        >
          Go Back
        </Button>

        <div style={{ marginTop: "100px" }}>Sorry under construction</div>
      </Container>
    </>
  );
};

export default ProjectScreen;
