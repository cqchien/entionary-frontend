import { Dialog, DialogTitle, makeStyles } from "@material-ui/core";
import React from "react";
import { dialogMUIRoot } from "../globalStyle";

const useStyle = makeStyles(dialogMUIRoot);

const WordPackDialog = () => {
  const classes = useStyle();

  return (
    <Dialog
      classes={{ paper: classes.dialogPaper }}
      maxWidth="md"
      fullWidth
      disableBackdropClick
      open={true}
    >
      <DialogTitle classes={classes.title}>Word Pack</DialogTitle>
    </Dialog>
  );
};

export default WordPackDialog;
