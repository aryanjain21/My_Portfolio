import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { Link } from "@mui/material";

const BlogCard = (props) => {
  const { data } = props;

  return (
    <Card
      sx={{
        maxWidth: { xs: 350, md: 325 },
        maxHeight: { xs: 350, md: 325 },
        backgroundColor: "#112240",
        "&:hover": {
          mt: "-4px",
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "16px",
          }}
        >
          <FolderOutlinedIcon
            sx={{
              width: "40px",
              height: "40px",
              color: "#64ffda",
            }}
          />
          <Box>
            {data && data.githubLink && data.githubLink.length > 0 && data.githubLink.map((item, index) => (<Link href={item.link} target="_blank" key={index} sx={{
              mr: '4px'
            }}>
              <GitHubIcon
                sx={{
                  color: "#a8b2d1",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#64ffda",
                  },
                }}
              />
            </Link>))}
            <Link href={data.link} target="_blank">
              <OpenInNewOutlinedIcon
                sx={{
                  color: "#a8b2d1",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#64ffda",
                  },
                }}
              />
            </Link>
          </Box>
        </Box>
        <Link
          sx={{
            color: "#ccd6f6",
            fontSize: "1.5rem",
            lineHeight: 1,
            textDecoration: "none",
            "&:hover": {
              color: "#64ffda",
            },
          }}
          target="_blank"
          href={data.link}
        >
          {data.title}
        </Link>
        <Typography
          component="div"
          sx={{
            mt: "16px",
            minHeight: 100,
            color: "#a8b2d1",
          }}
        >
          {data.info}
        </Typography>
        <Box
          sx={{
            display: "flex",
            mt: "12px",
          }}
        >
          {data &&
            data.techStack &&
            data.techStack.length > 0 &&
            data.techStack.map((tech, index) => (
              <Typography
                key={index}
                sx={{
                  mr: "8px",
                  color: "#8892b0",
                  "&:last-child": {
                    mr: 0,
                  },
                }}
              >
                {tech.tech}
              </Typography>
            ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
