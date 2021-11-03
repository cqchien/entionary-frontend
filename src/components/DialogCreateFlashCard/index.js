import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { Loop } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import SelectCustom from "../Custom/Select";
import TextFieldCustom from "../Custom/TextField";
import { dialogMUIRoot } from "../globalStyle";

const useStyle = makeStyles(dialogMUIRoot);

const DialogCreateFlashCard = ({
  validationSchema,
  onCancel,
  handleCreateFlashCard,
  children,
  loading,
}) => {
  const classes = useStyle();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

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
        <form
          id="formCreateFlashcard"
          onSubmit={handleSubmit(handleCreateFlashCard)}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextFieldCustom
                label="Flashcard Name*"
                size="medium"
                fullWidth
                disabled={loading}
                inputProps={{
                  ...register("name"),
                  autoFocus: true,
                }}
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              {children}
            </Grid>

            <Grid item xs={12} md={6}>
              <SelectCustom
                formId="topic"
                labelName="Topic*"
                inputProps={{
                  ...register("topic"),
                }}
                disabled={loading}
                menuItems={[{ name: "TOEIC" }, { name: "IELTS" }]}
                error={Boolean(errors.topic)}
                errorText={errors.topic?.message}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectCustom
                formId="mode"
                labelName="Display Mode*"
                disabled={loading}
                inputProps={{
                  ...register("mode"),
                }}
                menuItems={[{ name: "Private" }, { name: "Public" }]}
                error={Boolean(errors.mode)}
                errorText={errors.mode?.message}
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
          disabled={loading}
          form="formCreateFlashcard"
          className="_btn _btn-primary"
          variant="contained"
          //Element placed after the children.
          endIcon={loading && <Loop className="ani-spin" />}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogCreateFlashCard;
