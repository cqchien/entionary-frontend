import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageAlert from "../components/MessageAlert";
import { closeMessage } from "../redux/reducers/message.reducer";

const Message = () => {
  // Allows you to extract data from the Redux store state, using a selector function.
  const { open, type, message } = useSelector(
    (state) => state.message
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeMessage());
  };
  return (
    <MessageAlert
      open={open}
      type={type}
      message={message}
      handleClose={handleClose}
    />
  );
};

export default Message;
