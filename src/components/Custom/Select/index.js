import {
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useState } from "react";
import selectStyle from "./style";

const useStyle = makeStyles(selectStyle);

const SelectCustom = ({
  formId,
  menuItems,
  labelName,
  inputProps,
  error,
  errorText,
  ...otherProps
}) => {
  const classes = useStyle();

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <FormControl
        className={`${classes.root}`}
        fullWidth
        variant="filled"
        error={error}
      >
        <InputLabel
          classes={{ root: classes.label, focused: classes.labelFocus }}
          id={formId}
        >
          {labelName}
        </InputLabel>

        <Select
          classes={{
            root: classes.selectRoot,
            icon: `${error ? classes.selectIconError : classes.selectIcon}`,
          }}
          MenuProps={{ classes: { paper: classes.selectMenu } }}
          disableUnderline
          labelId={formId}
          value={value}
          label={labelName}
          onChange={handleChange}
          inputProps={inputProps}
          {...otherProps}
        >
          {menuItems &&
            menuItems.map((item, index) => (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormHelperText className="MuiFormHelperText-contained Mui-error">
        {errorText}
      </FormHelperText>
    </>
  );
};

export default SelectCustom;
