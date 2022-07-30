import React from "react";
import Button from "@mui/material/Button";

const CustomButton = (props) => {

  const {btnText, styles, onClickHandler} =props;

  const btnHandler = () => {
    onClickHandler();
  }

  return (
    <Button sx={{
      maxWidth: styles && styles.maxWidth ? styles.maxWidth : '200px',
      height: styles && styles.height ? styles.height : '45px',
      color: styles && styles.color ? styles.color : '#08fdd8',
      border: styles && styles.border ? styles.border : '1px solid #08fdd8',
      backgroundColor: 'transparent',
      background: 'linear-gradient(to left, transparent 50%, #08fdd8 50%) right',
      backgroundSize: '200%',
      transition: '.5s ease-out',
      '&:hover': {
        color: '#1d1d1d',
        backgroundPosition: 'left',
      }
    }} onClick={btnHandler}>
      {btnText}
    </Button>
  );
};

export default CustomButton;
