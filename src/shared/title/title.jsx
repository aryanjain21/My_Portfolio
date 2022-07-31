import React from "react";
import Box from "@mui/material/Box";

const Title = (props) => {
  const { title } = props;

  return (
    <Box
      sx={{
        fontSize: "2.5rem",
        lineHeight: "2rem",
        mb: "24px",
        color: "#08fdd8",

        animationDuration: "1s",
        animationFillMode: "both",
        animationIterationCount: 1,
        "@keyframes rubberBand": {
          from: {
            transform: "scale3d(1, 1, 1)",
          },

          "25%": {
            transform: "scale3d(1, 0.95, 1)",
          },

          "50%": {
            transform: "scale3d(1, 0.85, 1)",
          },

          "75%": {
            transform: "scale3d(1, .95, 1.05)",
          },

          to: {
            transform: "scale3d(1, 1, 1)",
          },
        },
        "&:hover": {
          animationName: "rubberBand",
        },
      }}
    >
      {title}
    </Box>
  );
};

export default Title;
