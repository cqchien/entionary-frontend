import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import { closeMessage } from "../../redux/reducers/message.reducer";

const MessageAlert = () => {
  // Allows you to extract data from the Redux store state, using a selector function.
  const { open, duration, type, message } = useSelector(
    (state) => state.message
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeMessage());
  };
  console.log("1")
  return (
    <Message
      open={open}
      duration={duration}
      type={type}
      message={message}
      handleClose={handleClose}
    />
  );
};

export default MessageAlert;
