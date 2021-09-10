import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

const Message = ({ open, duration, type, message, handleClose }) => {
  console.log("2");
  console.log(handleClose);
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={handleClose}
      autoHideDuration={duration}
    >
      <Alert onClose={handleClose} severity={type} variant={"filled"}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Message;
