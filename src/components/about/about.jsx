import React from "react";
import { Box, Link } from "@mui/material";
import Title from "../../shared/title/title";
import Aryan from "../../assets/images/aryan.png";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "54px",
        py: "24px",
        height: "90vh",
      }}
    >
      <Box
        sx={{
          width: "40%",
          mr: "54px",
        }}
      >
        <Title title={"About Me"} />
        <Box
          component={"p"}
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.1,
            color: "#fff",
          }}
        >
          I’m a Front-End Developer located in Pune. I have a serious passion
          for UI effects, animations and creating intuitive, dynamic user
          experiences.
        </Box>
        <Box
          component={"p"}
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.1,
            color: "#fff",
          }}
        >
          Well-organised person, problem solver, independent employee with high
          attention to detail. Fan of MMA, outdoor activities, TV series and
          English literature. A family person and father of one fractious boy &
          one cute girl,
        </Box>
        <Box
          component={"p"}
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.1,
            color: "#fff",
          }}
        >
          Interested in the entire frontend spectrum and working on ambitious
          projects with positive people.
        </Box>
        <Link 
        href="/contact"
        sx={{
            fontSize: '1.2rem',
            lineHeight: 1.1,
            color: '#08fdd8',
            mt: '16px',
            textDecoration: 'none',
        }}>Invite Me On &#9749;!! 	
        </Link>
      </Box>
      <Box
        sx={{
          width: "40%",
          height: "500px",
          mx: "54px",
          borderRadius: "100%",
          backgroundColor: "#08fdd8",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img style={{ position: 'absolute', bottom: 0, right: 50 }} src={Aryan} alt="Aryan Jain" />
      </Box>
    </Box>
  );
};

export default About;
