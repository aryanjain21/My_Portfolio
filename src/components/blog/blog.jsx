import React from "react";
import Box from "@mui/material/Box";
import BlogCard from "../../shared/blogCard/blogCard";
import Title from "../../shared/title/title";

const Blog = () => {
  const blogData = [
    {
      title: "Debouncing & Throttling in JavaScript",
      info: "Debouncing & Throttling are techniques in JavaScript to optimize & enhance the performance of your website, also prevent unnecessary API calls.",
      link: "https://front-end-with-aj.hashnode.dev/debouncing-and-throttling",
      date: "Apr 30, 2022",
    },
    {
      title: "Centering technique in CSS layout",
      info: "Centering elements with CSS sometimes can be tricky. There are many different way to use but it's depends on the element & the content.",
      link: "https://front-end-with-aj.hashnode.dev/centering-techniques",
      date: "Apr 30, 2022",
    },
  ];

  return (
    <Box
      sx={{
        p: { xs: "36px 24px 24px", md: "54px" },
      }}
    >
      <Title title={"Blog"} />
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: 'center', md: 'flex-start' },
          flexWrap: "wrap",
        }}
      >
        {blogData.map((data, index) => (
          <Box key={index} sx={{ 
            mr: { xs: 0, sm: '8px', md: "11px" }, 
            mb: "16px",
            '&:last-child': {
              mr: 0,
              mb: 0,
            },
            }}>
            <BlogCard data={data} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Blog;
