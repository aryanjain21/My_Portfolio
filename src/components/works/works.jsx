import React from "react";
import { Box } from "@mui/material";
import Experience from "../../shared/experience/experience";
import Title from "../../shared/title/title";
import BlogCard from "../../shared/blogCard/blogCard";

const Works = () => {
  const projectData = [
    {
      title: "Portfolio",
      info: "A simple project to show about me, skills, work experience & more...",
      link: "https://do-tasc.netlify.app/login",
      githubLink: [
        { link: 'https://github.com/aryanjain21/my_portfolio' },
      ],
      techStack: [
        { tech: "React" },
        { tech: "Material UI" },
        { tech: "Git" },
      ],
    },
    {
      title: "Google Keep Clone",
      info: "A simple Google Keep clone to add, archive & delete notes with authentication.",
      link: "https://tomar-nota.netlify.app/keep-notes",
      githubLink: [
        { link: 'https://github.com/aryanjain21/keepNotesFE' },
        { link: 'https://github.com/aryanjain21/keepNoteBE' },
      ],
      techStack: [
        { tech: "React" },
        { tech: "Node" },
        { tech: "Express" },
        { tech: "MongoDB" },
      ],
    },
    {
        title: "To DO APP",
        info: "User can create daily or upcoming task and added edit, mark as complete & delete functionality.",
        link: "https://do-tasc.netlify.app/login",
        githubLink: [
          { link: 'https://github.com/aryanjain21/todoFE' },
          { link: 'https://github.com/aryanjain21/todoBE' },
        ],
        techStack: [
          { tech: "React" },
          { tech: "Node" },
          { tech: "Express" },
          { tech: "MongoDB" },
        ],
      },
      {
        title: "Nice Pair",
        info: "Nice Pair is E-commerce platform(under development) for shoe shopping with authentication, add to wishlist & cart, search functionality & more...",
        link: "https://nice-pair.netlify.app",
        githubLink: [
          { link: 'https://github.com/aryanjain21/shoeStoreFE' },
          { link: 'https://github.com/aryanjain21/server-setup' },
        ],
        techStack: [
          { tech: "React" },
          { tech: "Redux" },
          { tech: "Node" },
          { tech: "Express" },
          { tech: "MongoDB" },
        ],
      },
  ];

  return (
    <Box
      sx={{
        p: { xs: "36px 24px 24px", md: "54px" },
      }}
    >
      <Title title={"Experience"} />
      <Experience />
      <Box sx={{ mt: "16px" }}>
        <Title title={"Personal Projects"} />
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            flexWrap: 'wrap',
        }}>
        {projectData.map((data, index) => (
          <Box key={index} sx={{
            mr: { xs: 0, sm: '8px', md: '11px' },
            mb: '16px',
            '&:last-child': {
                mb: 0,
            }
          }}>
            <BlogCard data={data} />
          </Box>
        ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Works;
