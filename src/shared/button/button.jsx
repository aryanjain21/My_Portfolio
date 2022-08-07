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
      p: styles && styles.p ? styles.p : 0,
      border: styles && styles.border ? styles.border : '1px solid #08fdd8',
      borderRadius: styles && styles.borderRadius ? styles.borderRadius : '2px',
      background: styles && styles.background ? styles.background : 'linear-gradient(to left, transparent 50%, #08fdd8 50%) right',
      backgroundColor: styles && styles.backgroundColor ? styles.backgroundColor : 'transparent',
      backgroundSize: '200%',
      transition: styles && styles.background !== 'none' && '.5s ease-out',
      '&:hover': {
        color: '#1d1d1d',
        backgroundColor: styles && styles.hoverBackground ? styles.hoverBackground : '#08fdd8',
        backgroundPosition: styles && styles.background !== 'none' && 'left',
      }
    }} onClick={btnHandler}>
      {btnText}
    </Button>
  );
};

export default CustomButton;
