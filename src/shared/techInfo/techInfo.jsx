import React from "react";
import { Box } from "@mui/material";
import CustomButton from "../button/button";

const TechInfo = (props) => {
  const { techData } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {techData?.length > 0 &&
        techData.map((data, index) => (
          <Box
            key={index}
            sx={{
              width: "220px",
              height: "220px",
              p: "11px",
              mr: "12px",
              mb: "16px",
              position: "relative",
              backgroundColor: "#2c2c2c",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              "&:hover": {
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                img: {
                    opacity: 0.5,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                '> div': {
                    opacity: 1,
                }
              },
            }}
          >
            <img
              style={{
                width: "220px",
                height: "220px",
                opacity: 1,
                transition: ".5s ease",
                backfaceVisibility: "hidden",
              }}
              src={data.image}
              alt={data.title}
            />
            <Box
              sx={{
                transition: ".5s ease",
                opacity: 0,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <CustomButton btnText={data.title} onClickHandler={() => {
                window?.open?.(data.link, '_blank');
              }} />
            </Box>
          </Box>
        ))}
    </Box>
  );
};

export default TechInfo;
