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

const DialogAddWordFlashCard = ({
  validationSchema,
  onCancel,
  handleAddWord,
  handleQueryWord,
  handleQueryType,
  handleQueryCategory,
  categories,
  types,
  definition,
  loading,
  children,
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
      <DialogTitle classes={{ root: classes.title }}>Word</DialogTitle>

      {/* Dialog Content */}
      <DialogContent dividers classes={{ dividers: classes.breakLine }}>
        <form
          id="formAddWordToFlashcard"
          onSubmit={handleSubmit(handleAddWord)}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextFieldCustom
                label="Word*"
                size="medium"
                fullWidth
                disabled={loading}
                inputProps={{
                  ...register("word"),
                  autoFocus: true,
                }}
                onChange={handleQueryWord}
                error={Boolean(errors.word)}
                helperText={errors.word?.message}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              {children}
            </Grid>

            <Grid item xs={12} md={6}>
              <SelectCustom
                formId="type"
                labelName="Word Type*"
                inputProps={{
                  ...register("type"),
                }}
                disabled={loading}
                menuItems={types}
                onChange={handleQueryType}
                error={Boolean(errors.type)}
                errorText={errors.type?.message}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectCustom
                formId="category"
                labelName="Category*"
                disabled={loading}
                inputProps={{
                  ...register("category"),
                }}
                onChange={handleQueryCategory}
                menuItems={categories}
                error={Boolean(errors.category)}
                errorText={errors.category?.message}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <p className="entionary-title" style={{fontSize: "17px"}} >Definition: {definition}</p>
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
          form="formAddWordToFlashcard"
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

export default DialogAddWordFlashCard;
