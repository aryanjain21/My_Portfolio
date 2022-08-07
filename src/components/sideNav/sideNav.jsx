import { Box, Link } from "@mui/material";
import React from "react";
import LogoSection from "../../shared/logoSection/logoSection";
import NavMenu from "../../shared/navMenu/navMenu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SideNav = (props) => {
  return (
    <Box
      sx={{
        width: {xs: '100%', md: "150px"},
        height: "100vh",
        backgroundColor: "#181818",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#000",
        }}
      >
        <LogoSection {...props} />
      </Box>
      <Box>
        <NavMenu />
      </Box>
      <Box
        sx={{
          py: "8px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link href="https://in.linkedin.com/in/aryan-jain-667b13151" target={"_blank"}>
          <LinkedInIcon
            sx={{
              color: "#909096",
              mr: "8px",
              "&:hover": {
                color: "#08FDD8",
              },
            }}
          />
        </Link>
        <Link href="https://www.github.com/aryanjain21" target={"_blank"}>
          <GitHubIcon
            sx={{
              color: "#909096",
              "&:hover": {
                color: "#08FDD8",
              },
            }}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default SideNav;
