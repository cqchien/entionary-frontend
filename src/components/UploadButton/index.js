import { Button, makeStyles } from "@material-ui/core";
import {
  CloudUploadRounded,
  DeleteForeverRounded,
  Loop,
} from "@material-ui/icons";
import React from "react";
import uploadButtonStyle from "./style";

const useStyle = makeStyles(uploadButtonStyle);

const UploadButton = ({
  fileType,
  loading,
  image,
  title,
  handleUploadFile,
  loadingOfForm,
  removeFile,
  ...otherProps
}) => {
  const classes = useStyle();
  return (
    <div className="w-100 h-100">
      {!loading && !image && (
        <>
          <input
            className={classes.input}
            accept={`${fileType}/*`}
            id="button-file"
            htmlFor="contained-button-file"
            type="file"
            disabled={loadingOfForm}
            onChange={(event) => handleUploadFile(event, fileType)}
            {...otherProps}
          />
          <label htmlFor="button-file">
            <Button
              className={`${classes.btn} w-100 h-100`}
              variant="contained"
              color="primary"
              component="span"
              endIcon={
                loading ? <Loop className="ani-spin" /> : <CloudUploadRounded />
              }
            >
              {title}
            </Button>
          </label>
        </>
      )}

      {image && (
        <div className={`${classes.review} w-100 h-100 flex-center-between`}>
          <img src={image.source} alt="Flashcard" />
          <p>{`${image.name} (${image.size} KB)`} </p>
          <DeleteForeverRounded
            className="icon cur-pointer"
            onClick={removeFile}
          />
        </div>
      )}
    </div>
  );
};

export default UploadButton;
