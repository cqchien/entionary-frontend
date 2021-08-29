import { makeStyles, TextField } from "@material-ui/core";
import textFieldStyle from "./style";

const useStyle = makeStyles(textFieldStyle);

function TextFieldCustom(props) {
  const classes = useStyle();
  const { inputProps, ...otherProps } = props;
  console.log(inputProps);
  // classes: Override or extend the styles applied to the component.
  return (
    <TextField
      classes={classes}
      inputProps={inputProps}
      InputProps={{
        disableUnderline: true,
      }}
      {...otherProps}
      variant="filled"
    />
  );
}

export default TextFieldCustom;
