import React from "react";
import { Box, Button, Link } from "@mui/material";
import Title from "../../shared/title/title";
import Aryan from "../../assets/images/aryan.png";
import resume from '../../assets/Aryan_Jain_Resume.pdf';

const About = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "normal", md: "space-between" },
        alignItems: "center",
        p: { xs: "36px 24px 24px", md: "54px" },
        height: { xs: "100vh", sm: "90vh" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          mr: { xs: 0, md: "54px" },
        }}
      >
        <Title title={"About Me"} />
        <Box
          component={"p"}
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.2rem" },
            lineHeight: 1.1,
            color: "#fff",
          }}
        >
          Hi, I'm Aryan Jain. Currently working as Frontend Engineer at
          Mindstix, Pune.
        </Box>
        <Box
          component="p"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.2rem" },
            lineHeight: 1.1,
            color: "#fff",
          }}
        >
          I have a passion for development, animations and developing functional & responsive
          website with dynamic user experiences.
        </Box>
        <Box
          component={"p"}
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.2rem" },
            lineHeight: 1.1,
            color: "#fff",
          }}
        >
          Interested in the fullstack development & freelancing as well and
          working on ambitious projects with positive people. For contact me hit
          the below link
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'column' },
            alignItems: { xs: 'center', md: 'flex-start' },
            mt: "11px",
          }}
        >
          <Link
            href="/contact"
            sx={{
              fontSize: "1.2rem",
              lineHeight: 1.1,
              color: "#08fdd8",
              mr: { xs: '24px', md: 0 },
              mb: { xs: 0, md: '11px' },
              textDecoration: "none",
            }}
          >
            Invite Me On &#9749;!!
          </Link>
          <Button component='a'  href={resume} download="Aryan_Resume" target='_blank' variant="contained" color="primary">
            Resume
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "80%", sm: "65%", lg: "50%", xl: "40%" },
          height: { xs: "30%", sm: "56%", md: "500px" },
          mx: { xs: 0, lg: "54px" },
          mt: { xs: "24px", md: 0 },
          borderRadius: { xs: 0, sm: "100%"},
          backgroundColor: { xs: 'none', sm: "lightblue"},
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          component="img"
          sx={{
            position: "absolute",
            // objectFit: { xs: "cover", sm: "normal" },
            bottom: { xs: "auto", sm: 0 },
            right: { xs: 0, sm: 120, md: 90, lg: 110 },
          }}
          src={Aryan}
          alt="Aryan Jain"
        />
      </Box>
    </Box>
  );
};

export default About;
