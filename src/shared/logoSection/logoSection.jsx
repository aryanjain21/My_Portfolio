import React from "react";
import { Box, Link } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const LogoSection = (props) => {

  const { showMenu, setShowMenu } = props;

  return (
    <Box
      sx={{
        py: "11px",
        position: 'relative',
      }}
    >
      {showMenu && <Box 
      onClick={() => setShowMenu(false)}
      sx={{
        display: { xs: 'block', md: 'none' },
        position: 'absolute',
        right: '16px'
      }}>
        <CloseOutlinedIcon sx={{
          color: '#08fdd8',
          cursor: 'pointer',
        }} />
      </Box>}
      <Link
        href="/about"
        sx={{
          mb: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <Box
          sx={{
            fontSize: "4rem",
            color: "#a5a5a5",
          }}
        >
          A
        </Box>
        <Box
          sx={{
            fontSize: "1.5rem",
            lineHeight: "1rem",
            color: "#fff",
          }}
        >
          Aryan
        </Box>
      </Link>
      <Box
        sx={{
          fontSize: "1.1rem",
          lineHeight: 1,
          pt: '8px',
          mb: '8px',
          color: "#a5a5a5",
          textAlign: 'center'
        }}
      >
        Web Developer
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "150px",
            height: "50px",
            lineHeight: "50px",
            fontSize: "1.2em",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            overflow: "hidden",
            backgroundColor: "#2c2c2c",
            color: "#a5a5a5",
            transformOrigin: "right",
            transform: "perspective(100px) rotateY(-15deg)",
          }}
        >
          <Box
            component={"span"}
            sx={{
              position: "absolute",
              animation: "marquee 5s linear infinite",
              animationDelay: "2.5s",
              left: "-100%",
              "@keyframes marquee": {
                from: {
                  left: "100%",
                },

                to: {
                  left: "-100%",
                },
              },
            }}
          >
            Web Developer
          </Box>
        </Box>
        <Box
          sx={{
            width: "150px",
            height: "50px",
            lineHeight: "50px",
            fontSize: "1.2em",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            overflow: "hidden",
            backgroundColor: "#2c2c2c",
            color: "#a5a5a5",
            transformOrigin: "left",
            transform: "perspective(100px) rotateY(15deg)",
          }}
        >
          <Box
            component={"span"}
            sx={{
              position: "absolute",
              animation: "marquee 5s linear infinite",
              "@keyframes marquee": {
                from: {
                  left: "100%",
                },

                to: {
                  left: "-100%",
                },
              },
            }}
          >
            Web Developer
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default LogoSection;
