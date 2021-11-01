import React from "react";
import UploadButton from "../components/UploadButton";

const FileUpload = ({ title, name, handleFile }) => {
  const handleUploadFile = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  return (
    <UploadButton
      type="image"
      title={title}
      handleUploadFile={handleUploadFile}
    />
  );
};

export default FileUpload;
