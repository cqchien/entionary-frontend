import { makeStyles, TextField } from "@material-ui/core";
import textFieldStyle from "./style";
// import PropTypes from "prop-types";

const useStyle = makeStyles(textFieldStyle);

function TextFieldCustom(props) {
  const classes = useStyle();
  const { helperText, error, inputProps, ...otherProps } = props;
  // classes: Override or extend the styles applied to the component.
  return (
    <TextField
      classes={classes}
      error={error}
      inputProps={inputProps}
      InputProps={{
        disableUnderline: true,
      }}
      {...otherProps}
      variant="filled"
      helperText={helperText}
    />
  );
}

// TextFieldCustom.propTypes = {
//   error: PropTypes.bool,
//   inputProps: PropTypes.any,
// };

// TextFieldCustom.defaultProps = {
//   error: false,
//   inputProps: {},
// };

export default TextFieldCustom;
