const selectStyle = {
  root: {
    backgroundColor: "var(--bg-color-accent)",
    color: "var(--text-color)",
    borderRadius: "var(--border-radius)",

    "& .Mui-error .MuiSelect-root": {
      borderColor: "var(--error-color) !important",
    },

    "& .MuiFormLabel-root.Mui-error": {
      color: "var(--error-color) !important",
    },
  },

  label: {
    color: "var(--label-color)",
    fontSize: "1.5rem",
  },

  labelFocus: {
    color: "var(--secondary-color) !important",
  },

  selectRoot: {
    color: "var(--text-color)",
    fontSize: "1.6rem",
    borderRadius: "var(--border-radius) !important",
    border: "solid 1px var(--border-color)",

    backgroundColor: "var(--bg-color-accent) !important",
  },

  selectIcon: {
    color: "var(--label-color)",
  },

  selectIconError: {
    color: "var(--error-color)",
  },

  selectMenu: {
    backgroundColor: "var(--bg-color-accent)",
    maxHeight: "25rem",

    "& .MuiMenuItem-root": {
      fontSize: "1.5rem",
      padding: "1rem 1.6rem",

      "&:hover, &:active, &.Mui-selected": {
        backgroundColor: "var(--hover-color)",
      },
    },
  },
};

export default selectStyle;
