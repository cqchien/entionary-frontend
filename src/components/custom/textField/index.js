import { makeStyles, TextField } from "@material-ui/core";
import textFieldStyle from "./style";

const useStyle = makeStyles(textFieldStyle);

function TextFieldCustom(props) {
  console.log(props);
  const classes = useStyle();

  return <TextField classes={classes} inputProps={props} variant="filled" />;
}

export default TextFieldCustom;
