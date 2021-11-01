import React from "react";
import { useDispatch } from "react-redux";
import UploadButton from "../components/UploadButton";
import { setMessage } from "../redux/reducers/message.reducer";
import { checkFileType } from "../helper/checkFileType";
import { checkFileSize } from "../helper/checkFileSize";

const FileUpload = ({ title, name, onChangeFile }) => {
  const dispatch = useDispatch();

  const handleUploadFile = (event, fileType) => {
    const file = event.target.files[0];

    let message;

    if (!file) {
      message = "File is invalid";
    } else {
      if (!checkFileType(file, fileType)) {
        message = `File is not ${fileType}`;
      }
      if (!checkFileSize(file, fileType)) {
        message = "The maximum image size is 10 MB";
      }

      // transmit data to handle form
      onChangeFile(file);
      return;
    }

    const failPayload = {
      message,
      type: "error",
    };
    dispatch(setMessage(failPayload));
  };

  return (
    <UploadButton
      fileType={"image"}
      title={title}
      handleUploadFile={handleUploadFile}
    />
  );
};

export default FileUpload;
