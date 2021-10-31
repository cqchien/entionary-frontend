import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useState } from "react";
import selectStyle from "./style";

const useStyle = makeStyles(selectStyle);

const SelectCustom = ({ labelName }) => {
  const classes = useStyle();

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl className={`${classes.root}`} fullWidth variant="filled">
      <InputLabel
        classes={{ root: classes.label, focused: classes.labelFocus }}
        id="wordType"
      >
        {labelName}
      </InputLabel>

      <Select
        classes={{
          root: classes.selectRoot,
          icon: classes.selectIcon,
        }}
        MenuProps={{ classes: { paper: classes.selectMenu } }}
        disableUnderline
        labelId="wordType"
        value={value}
        label={labelName}
        onChange={handleChange}
      >
        <MenuItem value="n">Noun(n)</MenuItem>
        <MenuItem value="adj">Adjective(adj)</MenuItem>
        <MenuItem value="v">Verb(v)</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectCustom;
