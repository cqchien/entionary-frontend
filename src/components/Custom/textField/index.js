import { makeStyles, TextField } from "@material-ui/core";
import textFieldStyle from "./style";

const useStyle = makeStyles(textFieldStyle);

function TextFieldCustom(props) {
  console.log(props);
  const classes = useStyle();

  // classes: Override or extend the styles applied to the component.
  return (
    <TextField
      classes={classes}
      {...props}
      variant="filled"
    />
  );
}

export default TextFieldCustom;
