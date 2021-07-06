import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Grid,
  Typography,
  Divider,
  Avatar,
} from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";

import TopBar from "../components/topbar/TopBar";
import Menu from "../components/menu/Menu";
import YoutubeEmbed from "../components/youtube/YoutubeEmbed";

import { allProjects } from "../data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./scss/projectscreen.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },
  large: {
    width: "100%",
    maxWidth: "5vw",
    height: "auto",
  },
  media: {
    height: 0,
  },
}));

const ProjectScreen = ({ match, history }) => {
  // Variables
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  const projectID = match.params.id;
  const [data, setData] = useState("");
  const [stacks, setStacks] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(data);

  // Methods
  const viewGithub = () => {
    window.open(data.githubURL, "_blank").focus();
  };
  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    const projectData = allProjects.find(
      (proj) => proj.id === Number(projectID)
    );
    setData(projectData);
    setStacks(projectData.stacks);
  }, [projectID]);

  return (
    <>
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></TopBar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Container className="projectscreen">
        <Button
          onClick={goBack}
          style={{ margin: "90px 0 10px 0" }}
          variant="outlined"
        >
          Go Back
        </Button>
        <Grid spacing={4} alignItems="center" container>
          <Grid item xs={12} sm={8}>
            <Slider {...settings}>
              {data.youtubeURL && (
                <YoutubeEmbed embedId={data.youtubeID}></YoutubeEmbed>
              )}
              <img src={data.img} alt={data.title} />
            </Slider>
          </Grid>
          <Grid
            style={{
              textAlign: "center",
            }}
            item
            xs={12}
            sm={4}
          >
            <Typography variant="h4" gutterBottom>
              {data.title}
            </Typography>
            <Divider />
            <Typography className={classes.root} variant="h6">
              {data.description}
            </Typography>
            <Divider className={classes.root} />
            <div className="flex-container">
              {stacks.map((stack) => (
                <div className="flex-item" key={stack._id}>
                  <Avatar
                    variant="rounded"
                    alt={stack.name}
                    src={stack.image}
                  />
                </div>
              ))}
            </div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div
              style={{
                textAlign: "center",
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              {data.githubURL && (
                <Button
                  onClick={viewGithub}
                  variant="outlined"
                  color="primary"
                  // startIcon={<GitHubIcon />}
                >
                  <GitHubIcon /> &nbsp; View source code
                </Button>
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProjectScreen;
