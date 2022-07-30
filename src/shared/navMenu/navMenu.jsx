import { Box, Link, List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const NavMenu = () => {
  const navData = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "My Skills",
      link: "/skills",
    },
    {
      title: "Work",
      link: "/work",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Blog",
      link: "/blog",
    },
  ];

  return (
    <Box>
      <List>
        {navData.map((data, index) => (
          <ListItem
            key={index}
            sx={{
              textAlign: "center",
              border: '1px solid #282828',
            }}
          >
            <ListItemText key={index}>
              <Link
                href={data.link}
                color="#909096"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#08FDD8",
                  },
                }}
              >
                {data.title}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NavMenu;
