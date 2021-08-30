import { makeStyles, TextField } from "@material-ui/core";
import textFieldStyle from "./style";
import PropTypes from "prop-types";

const useStyle = makeStyles(textFieldStyle);

const propType = {
  error: PropTypes.bool,
  helperText: PropTypes.string,
  inputProps: PropTypes.object,
};

const defaultProps = {
  error: false,
  inputProps: {},
};

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
      helperText={helperText} // error message
    />
  );
}

TextFieldCustom.propTypes = propType;
TextFieldCustom.defaultProps = defaultProps;

export default TextFieldCustom;
