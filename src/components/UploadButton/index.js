import { Button, makeStyles } from "@material-ui/core";
import { CloudUploadRounded } from "@material-ui/icons";
import React from "react";
import uploadButtonStyle from "./style";

const useStyle = makeStyles(uploadButtonStyle);

const UploadButton = ({ fileType, title, handleUploadFile, ...otherProps }) => {
  const classes = useStyle();
  return (
    <div className="w-100 h-100">
      <input
        className={classes.input}
        accept={`${fileType}/*`}
        id="button-file"
        htmlFor="contained-button-file"
        type="file"
        onChange={(event) => handleUploadFile(event, fileType)}
        {...otherProps}
      />
      <label htmlFor="button-file">
        <Button
          className={`${classes.btn} w-100 h-100`}
          variant="contained"
          color="primary"
          component="span"
          endIcon={<CloudUploadRounded />}
        >
          {title}
        </Button>
      </label>
    </div>
  );
};

export default UploadButton;
