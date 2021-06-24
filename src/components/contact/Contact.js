import React, { useState } from "react";
import "./contact.scss";
import { TextField, Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import { Send } from "@material-ui/icons";
import emailjs from "emailjs-com";
import { SERVICE_ID, USER_ID, TEMPLATE_ID } from "../../emailkey";

function Alert(props) {
  return <MuiAlert elevation={6} variant="outlined" {...props} />;
}

const Contact = () => {
  // Variables
  const [snackMessage, setSnackMessage] = useState("");
  const [email, setEmail] = useState("");
  const [composedMessage, setComposedMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState("");

  // Methods
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      email: email,
      message: composedMessage,
      to_name: "Ariel",
    };

    // Send Email
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
      (response) => {
        setVariant("success");
        setSnackMessage("Successfully sent an email.");
        setOpen(true);
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        setVariant("error");
        setSnackMessage("Something went wrong");
        setOpen(true);
        console.log("FAILED...", err);
      }
    );
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Drop me a message</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            placeholder="email@example.com"
            type="email"
            margin="normal"
            variant="outlined"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-multiline-static"
            placeholder="Hey, I would like to get in touch with you."
            multiline
            rows={4}
            variant="outlined"
            required
            value={composedMessage}
            onChange={(e) => setComposedMessage(e.target.value)}
          />
          <Button
            style={{ marginTop: 10 }}
            size="medium"
            type="submit"
            variant="contained"
            color="primary"
          >
            Send &nbsp;
            <Send></Send>
          </Button>
        </form>
        <div className="footer">
          &copy; {new Date().getFullYear()}, Made with{" "}
          <svg
            viewBox="0 0 1792 1792"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "0.8rem" }}
          >
            <path
              d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
              fill="#e25555"
            ></path>
          </svg>{" "}
          by Ariel
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={variant}>
          {snackMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
