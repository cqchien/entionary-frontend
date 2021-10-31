import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import SelectCustom from "../Custom/Select";
import { dialogMUIRoot } from "../globalStyle";

const useStyle = makeStyles(dialogMUIRoot);

const WordPackDialog = ({ onCancel, handleCreateFlashCard }) => {
  const classes = useStyle();

  return (
    <Dialog
      classes={{ paper: classes.dialogPaper }}
      maxWidth="md"
      fullWidth
      open={true}
    >
      {/* Dialog Title */}
      <DialogTitle classes={{ root: classes.title }}>WordPack</DialogTitle>

      {/* Dialog Content */}
      <DialogContent dividers classes={{ dividers: classes.breakLine }}>
        <form id="wordPackForm" onSubmit={handleCreateFlashCard}>

        </form>
      </DialogContent>

      {/* Dialog Action */}
      <DialogActions>
        <Button
          onClick={onCancel}
          className="_btn _btn-stand"
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          disableFocusRipple
          component="button"
          type="submit"
          form="wordPackForm"
          className="_btn _btn-primary"
          variant="contained"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WordPackDialog;
