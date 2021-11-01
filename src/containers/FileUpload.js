import React from "react";
import { useDispatch } from "react-redux";
import UploadButton from "../components/UploadButton";
import { setMessage } from "../redux/reducers/message.reducer";
import { checkFileType } from "../helper/checkFileType";
import { checkFileSize } from "../helper/checkFileSize";

const FileUpload = ({ title, name, handleFile }) => {
  const dispatch = useDispatch();

  const handleUploadFile = (event, fileType) => {
    const file = event.target.files[0];
    if (!file) {
      const fileNotFound = {
        message: "File is invalid",
        type: "error",
      };
      dispatch(setMessage(fileNotFound));
    } else {
      if (!checkFileType(file, fileType)) {
        const fileTypeError = {
          message: `File is not ${fileType}`,
          type: "error",
        };
        dispatch(setMessage(fileTypeError));
      }

      if (!checkFileSize(file, fileType)) {
        const fileSizeError = {
          message: "The maximum image size is 10 MB",
          type: "error",
        };
        dispatch(setMessage(fileSizeError));
      }

      handleFile(file);
    }
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
