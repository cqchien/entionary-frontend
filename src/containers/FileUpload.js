import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UploadButton from "../components/UploadButton";
import { setMessage } from "../redux/reducers/message.reducer";
import { checkFileType } from "../helper/checkFileType";
import { checkFileSize } from "../helper/checkFileSize";
import Compressor from "compressorjs";
import { uploadImageToFirebase } from "../helper/uploadImageToFirebase";

const validateFile = (file, fileType) => {
  let status = true;
  if (!file) {
    return { status: false, message: "File is invalid" };
  }
  if (!checkFileType(file, fileType)) {
    return { status: false, message: `File is not ${fileType}` };
  }
  if (!checkFileSize(file, fileType)) {
    return { status: false, message: "The maximum image size is 10 MB" };
  }
  return { status };
};

const FileUpload = ({ title, name, onChangeFile }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const handleUploadFileError = () => {
    onChangeFile("");

    setLoading(false);

    const failPayload = {
      message: "File upload was fail",
      type: "error",
    };
    dispatch(setMessage(failPayload));
  };

  const handleUploadFile = (event, fileType) => {
    const file = event.target.files[0];

    // Validate th exist of file, file type and file size;
    const checkFile = validateFile(file, fileType);
    if (!checkFile.status) {
      const failPayload = {
        message: checkFile.message,
        type: "error",
      };
      dispatch(setMessage(failPayload));
      return;
    }

    setLoading(true);

    // Compress file
    // Transmit file with base64 format to handle file
    new Compressor(file, {
      quality: 0.6,

      async success(fileCompress) {
        // upload to firebase
        const { error, data } = await uploadImageToFirebase(fileCompress);

        if (error) {
          handleUploadFileError();
        } else {
          setLoading(false);
          // update data to display image
          setImage({ file, imageUrl: data });
          // Transmit data to handle in form.
          onChangeFile(data);
        }
      },

      error() {
        handleUploadFileError();
      },
    });
  };

  return (
    <UploadButton
      fileType={"image"}
      title={title}
      image={image}
      loading={loading}
      handleUploadFile={handleUploadFile}
    />
  );
};

export default FileUpload;
