import React from "react";
import { Box, Link } from "@mui/material";
import Title from "../../shared/title/title";
import Aryan from "../../assets/images/aryan.png";

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
            fontSize: { xs: "1.2rem", sm: '1.3rem', md: "1.2rem" },
            lineHeight: 1.1,
            color: "#fff",
          }}
        >
          Hi, I'm Aryan Jain.
          Currently working as Frontend Engineer at Mindstix, Pune.
        </Box>
        <Box
          component="p"
          sx={{
            fontSize: { xs: "1.2rem", sm: '1.3rem', md: "1.2rem" },
            lineHeight: 1.1,
            color: "#fff",
          }}
        >
          I have a passion for development, animations and developing responsive website with
          dynamic user experiences with functionality.
        </Box>
        <Box
          component={"p"}
          sx={{
            fontSize: { xs: "1.2rem", sm: '1.3rem', md: "1.2rem" },
            lineHeight: 1.1,
            color: "#fff",
          }}
        >
          Interested in the fullstack development & freelancing as well and working on ambitious
          projects with positive people. For contact me hit the below link
        </Box>
        <Link
          href="/contact"
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.1,
            color: "#08fdd8",
            mt: "16px",
            textDecoration: "none",
          }}
        >
          Invite Me On &#9749;!!
        </Link>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: '75%', lg: "50%", xl: "40%" },
          height: { xs: "50%", sm: '56%', md: "500px" },
          mx: { xs: 0, lg: "54px" },
          mt: { xs: "24px", md: 0 },
          borderRadius: "100%",
          backgroundColor: "#08fdd8",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          component="img"
          sx={{
            position: "absolute",
            objectFit: { xs: 'cover', sm: 'normal' },
            bottom: { xs: 'auto', sm: 0 },
            right: { xs: -30, sm: 50 },
          }}
          src={Aryan}
          alt="Aryan Jain"
        />
      </Box>
    </Box>
  );
};

export default About;
