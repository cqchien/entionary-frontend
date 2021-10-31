import { Grow, InputBase, makeStyles } from "@material-ui/core";
import React from "react";
import searchInputStyle from "./style";

const useStyle = makeStyles(searchInputStyle);

const SearchInputCustom = ({ placeholder, prefixIcon }) => {
  const classes = useStyle();

  return (
    <div className={classes.nativeInput}>
      <div className={`${classes.icon} flex-center show-input`}>
        {prefixIcon}
      </div>
      <Grow in={true}>
        <InputBase
          onChange={(event) => console.log(event.target?.value)}
          placeholder={placeholder}
          classes={{ root: classes.inputRoot, input: classes.inputInput }}
          inputProps={{ "aria-label": "search" }}
        />
      </Grow>
    </div>
  );
};

export default SearchInputCustom;
