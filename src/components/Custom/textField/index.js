import { makeStyles, TextField } from "@material-ui/core";
import textFieldStyle from "./style";

const useStyle = makeStyles(textFieldStyle);

function TextFieldCustom(props) {
  const classes = useStyle();
  const { error, inputProps, ...otherProps } = props;
  // classes: Override or extend the styles applied to the component.
  return (
    <TextField
      classes={classes}
      error={error}
      inputProps={inputProps}
      InputProps={{
        disableUnderline: true,
      }}
      InputLabelProps={{
        shrink: true,
      }}
      {...otherProps}
      variant="filled"
    />
  );
}

export default TextFieldCustom;
