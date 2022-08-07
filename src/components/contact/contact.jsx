import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, FormControl, TextField } from "@mui/material";
import CustomButton from "../../shared/button/button";
import Title from "../../shared/title/title";

const Contact = (props) => {
  const form = useRef();

  return (
    <Box
      sx={{
        p: { xs: "36px 24px 24px", md: "54px" },
        height: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'flex-start', md: 'center'}
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: "50%" },
        }}
      >
        <Title title={"Contact Me"} />
        <Box
          component={"p"}
          sx={{
            fontSize: "2rem",
            color: "#fff",
          }}
        >
          Let's work together.
        </Box>
        <Box
          component={"p"}
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.1,
            color: "#fff",
          }}
        >
          I’m interested to work as Web Developer & in freelance opportunities
          as well. However, if you have any other request or question, don’t
          hesitate to use the form.
        </Box>
      </Box>
      <FormControl
        ref={form}
        component={"form"}
        sx={{
          width: { xs: '100%', md: "50%" },
          mt: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: "16px",
          }}
        >
          <TextField
            fullWidth
            id="standard-basic"
            name="user_name"
            label="Name"
            variant="standard"
            required
            sx={{
              color: "red",
              mr: "11px",
            }}
            inputProps={{
              color: "#8d8d8d",
            }}
          />
          <TextField
            fullWidth
            id="standard-basic"
            name="user_email"
            label="Email"
            variant="standard"
            type="email"
            required
            inputProps={{
              color: "#8d8d8d",
            }}
          />
        </Box>
        <TextField
          fullWidth
          id="standard-basic"
          name="user_subject"
          label="Subject"
          variant="standard"
          sx={{
            mb: "16px",
          }}
        />
        <TextField
          id="standard-multiline-static"
          name="message"
          label="Message"
          multiline
          rows={4}
          variant="standard"
          required
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            mt: "24px",
          }}
        >
          <CustomButton
            styles={{
              p: '8px 16px'
            }}
            btnText={"Send Message!"}
            onClickHandler={() => {
              if (
                form.current.user_name.value &&
                form.current.user_email.value &&
                form.current.message.value
              ) {
                emailjs
                  .sendForm(
                    "service_tt3rtpq",
                    "template_ko06fdf",
                    form.current,
                    "ZQV-nLahX7JgyhF90"
                  )
                  .then(
                    (result) => {
                      console.log(result.text);
                    },
                    (error) => {
                      console.log(error.text);
                    }
                  );
              }
            }}
          />
        </Box>
      </FormControl>
    </Box>
  );
};

export default Contact;
