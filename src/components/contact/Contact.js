import React, { useState } from "react";
import "./contact.scss";
import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";

const Contact = () => {
  // Variables
  const [message, setMessage] = useState(false);

  // Methods
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
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
          />
          <TextField
            id="outlined-multiline-static"
            placeholder="Hey, I would like to get in touch with you."
            multiline
            rows={4}
            variant="outlined"
            required
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
          {message && <span>Thanks, I'll reply ASAP :)</span>}
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
    </div>
  );
};

export default Contact;
