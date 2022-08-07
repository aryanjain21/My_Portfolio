import React from "react";
import { Box } from "@mui/material";
import HTML from "../../assets/images/html.webp";
import CSS from "../../assets/images/css.webp";
import SASS from "../../assets/images/sass.webp";
import JavaScript from "../../assets/images/javascript.webp";
import Reactjs from "../../assets/images/react.webp";
import Redux from "../../assets/images/redux.webp";
import Material from "../../assets/images/material.webp";
import Git from "../../assets/images/git.webp";
import TechInfo from "../../shared/techInfo/techInfo";
import Angular from "../../assets/images/angular.webp";
import Node from "../../assets/images/nodejs.webp";
import MongoDB from "../../assets/images/mongodb.webp";
import StyledComponent from "../../assets/images/styled-component.webp";
import Title from "../../shared/title/title";

const Skills = () => {
  const techData = [
    {
      image: HTML,
      title: "HTML",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      image: CSS,
      title: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      image: SASS,
      title: "SASS",
      link: "https://sass-lang.com/documentation/",
    },
    {
      image: JavaScript,
      title: "JavaScript",
      link: "https://javascript.info/",
    },
    {
      image: Reactjs,
      title: "React",
      link: "https://reactjs.org/docs/getting-started.html",
    },
    {
      image: Redux,
      title: "Redux",
      link: "https://redux.js.org/introduction/getting-started",
    },
    {
      image: Material,
      title: "Material",
      link: "https://mui.com/material-ui/getting-started/overview/",
    },
    {
      image: Git,
      title: "Git",
      link: "https://git-scm.com/docs",
    },
  ];
  const learningData = [
    {
      image: StyledComponent,
      title: "Styled Component",
      link: "https://styled-components.com/docs",
    },
    {
      image: Angular,
      title: "Angular",
      link: "https://angular.io/docs",
    },
    {
      image: Node,
      title: "Node",
      link: "https://nodejs.org/en/docs/",
    },
    {
      image: MongoDB,
      title: "Mongo DB",
      link: "https://www.mongodb.com/docs/",
    },
  ];

  const skills = [{ title: "Skills" }, { title: "Learning" }];

  return (
    <Box
      sx={{
        p: { xs: "36px 24px 24px", md: "54px" },
      }}
    >
      {skills.map((data, index) => (
        <Box
          key={index}
          sx={{
            mb: "20px",
          }}
        >
          <Title title={data.title} />
          {data.title === "Learning" ? (
            <TechInfo techData={learningData} />
          ) : (
            <TechInfo techData={techData} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
