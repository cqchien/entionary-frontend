import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UploadButton from "../components/UploadButton";
import { setMessage } from "../redux/reducers/message.reducer";
import { checkFileType } from "../helper/checkFileType";
import { checkFileSize } from "../helper/checkFileSize";
import Compressor from "compressorjs";
import { readFile } from "../helper/readFile";

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

const FileUpload = ({ title, name, onChangeFile, loadingOfForm }) => {
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
        // Transmit data to handle in form.
        onChangeFile(fileCompress);

        // Read File
        try {
          const contentOfImage = await readFile(fileCompress);
          // update data to display image
          const image = {
            name: fileCompress.name,
            size: fileCompress.size,
            source: contentOfImage,
          };
          setImage(image);

          setLoading(false);
        } catch (error) {
          handleUploadFileError();
        }
      },

      error() {
        handleUploadFileError();
      },
    });
  };

  const removeFile = () => {
    setImage(null);
  };

  return (
    <UploadButton
      fileType={"image"}
      title={title}
      image={image}
      loading={loading}
      loadingOfForm={loadingOfForm}
      handleUploadFile={handleUploadFile}
      removeFile={removeFile}
    />
  );
};

export default FileUpload;
