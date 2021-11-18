import { Button, makeStyles } from "@material-ui/core";
import {
  CloudUploadRounded,
  DeleteForeverRounded,
  Loop,
} from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import uploadButtonStyle from "./style";

const useStyle = makeStyles(uploadButtonStyle);

const UploadButton = ({
  fileType,
  loading,
  image,
  id,
  title,
  handleUploadFile,
  loadingOfForm,
  removeFile,
  ...otherProps
}) => {
  const classes = useStyle();
  return (
    <>
      {!loading && !image && (
        <div className="w-100 h-100">
          <input
            className={classes.input}
            accept={`${fileType}/*`}
            id={`${id}`}
            htmlFor="contained-button-file"
            type="file"
            disabled={loadingOfForm}
            onChange={(event) => handleUploadFile(event, fileType)}
            {...otherProps}
          />
          <label htmlFor={`${id}`}>
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
        </div>
      )}

      {loading && !image && (
        <Skeleton variant="rect" classes={{ root: classes.skeleton }} />
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
    </>
  );
};

export default UploadButton;
