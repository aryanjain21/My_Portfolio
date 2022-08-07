import React from "react";
import { Box } from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const ExperienceDetails = (props) => {
  const { details } = props;

  return (
    <Box
      sx={{
        color: "#fff",
        my: "8px",
        maxWidth: "max-content",
      }}
    >
      <Box sx={{
        mb: '8px'
      }}>
        <Box
          sx={{
            display: "flex",
            fontSize: {xs: "1rem", md: "1.3rem" },
            lineHeight: 1,
            color: "#ccd6f6",
            mb: "16px",
          }}
        >
          <Box>{details.position}</Box>
          <Box
            sx={{
              fontWeight: "bold",
              color: "#64ffda",
            }}
          >
            &nbsp;@ {details.company}
          </Box>
        </Box>
        <Box>
          {details.start} - {details.end}
        </Box>
      </Box>
      <List
        sx={
          {
            //   width: "max-content",
          }
        }
        aria-label="list-data"
      >
        {details.work.map((work, index) => (
          <ListItem key={index} disablePadding sx={{}}>
            <ArrowRightOutlinedIcon
              sx={{
                color: "#64ffda",
                textAlign: "start",
              }}
            />
            <ListItemText
              sx={{
                color: "#8892b0",
              }}
              primary={work.list}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ExperienceDetails;
