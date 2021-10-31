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
import TextFieldCustom from "../Custom/TextField";
import UploadButton from "../Custom/UploadButton";
import { dialogMUIRoot } from "../globalStyle";

const useStyle = makeStyles(dialogMUIRoot);

const DialogCreateFlashCard = ({ onCancel, handleCreateFlashCard }) => {
  const classes = useStyle();

  return (
    <Dialog
      classes={{ paper: classes.dialogPaper }}
      maxWidth="md"
      fullWidth
      open={true}
    >
      {/* Dialog Title */}
      <DialogTitle classes={{ root: classes.title }}>Flashcard</DialogTitle>

      {/* Dialog Content */}
      <DialogContent dividers classes={{ dividers: classes.breakLine }}>
        <form id="formCreateFlashcard" onSubmit={handleCreateFlashCard}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextFieldCustom
                label="Flashcard Name"
                size="medium"
                fullWidth
                inputProps={{
                  name: "flashcardName",
                  autoFocus: true,
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <UploadButton title="Flashcard Picture" />
            </Grid>

            <Grid item xs={12} md={6}>
              <SelectCustom
                formId="topic"
                labelName="Topic"
                inputProps={{
                  name: "topic",
                }}
                menuItems={[
                  { name: "TOEIC", acronym: "toeic" },
                  { name: "IELTS", acronym: "ielts" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectCustom
                formId="mode"
                labelName="Display Mode"
                inputProps={{
                  name: "mode",
                }}
                menuItems={[
                  { name: "Private", acronym: "private" },
                  { name: "Public", acronym: "public" },
                ]}
              />
            </Grid>
          </Grid>
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
          form="formCreateFlashcard"
          className="_btn _btn-primary"
          variant="contained"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogCreateFlashCard;
