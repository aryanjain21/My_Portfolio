import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExperienceDetails from "./experienceDetails/experienceDetails";

const Experience = () => {
  const experienceData = [
    {
      id: 0,
      listTitle: "Mindstix",
      subDetails: {
        position: "Frontend Engineer",
        company: "Mindstix Software Labs",
        start: "July 2021",
        end: "Present",
        work: [
          {
            list: "Engineered and maintained features of web app using ES6, React, Redux, Material and CSS/SCSS.",
          },
          {
            list: "Manually tested sites in various browsers & mobile devices to ensure cross-browser compatibility and responsiveness",
          },
          {
            list: "Worked with teams of engineers, designers, and provide task completed/progress feedback & updating jira on daily basis",
          },
        ],
      },
    },
    {
      id: 1,
      listTitle: "Pixel6",
      subDetails: {
        position: "Engineer Trainee",
        company: "Pixel6 Web Studio",
        start: "Sep 2020",
        end: "June 2021",
        work: [
          {
            list: "Developed and maintained code for client websites using HTML, CSS, Material, JavaScript & Angular.",
          },
          {
            list: "Manually tested sites in various browsers to ensure cross-browser compatibility and responsiveness",
          },
          {
            list: "Communicate with multi-disciplinary teams of engineers, and clients on a daily basis",
          },
        ],
      },
    },
  ];

  const [selectedList, setSelectedList] = useState(0);

  const handleList = (list) => {
    setSelectedList(list);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <List
        sx={{
          width: "max-content",
          maxWidth: 200,
          display: "flex",
          flexDirection: { xs: "row", md: 'column' },
          position: "relative",
          "::before": {
            content: '""',
            position: "absolute",
            left: "-1px",
            height: "96px",
            borderLeft: { xs: 'none', md: "1px solid #8892b0"},
          },
        }}
        aria-label="list-data"
      >
        {experienceData.map((data, index) => (
          <ListItem
            disablePadding
            key={index}
            selected={index === selectedList}
            sx={{
              "&.Mui-selected": {
                position: "relative",
                backgroundColor: "#112240",
                "> div > div": {
                  color: "#64ffda",
                },
                "::before": {
                  content: '""',
                  position: "absolute",
                  left: "-2px",
                  width: "2px",
                  height: "46px",
                  borderLeft: "1px solid #64ffda",
                },
              },
            }}
          >
            <ListItemButton
              sx={{
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "#112240",
                  "> div": {
                    color: "#64ffda",
                  },
                },
              }}
              onClick={() => handleList(data.id)}
            >
              <ListItemText
                sx={{
                  color: "#8892b0",
                }}
                primary={data.listTitle}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          ml: { xs: 0, md: "16px" },
        }}
      >
        {experienceData.map((data, index) => (
          <React.Fragment key={index}>
            {index === selectedList && (
              <ExperienceDetails details={data.subDetails} />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
