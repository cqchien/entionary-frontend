export const formStyle = {
  root: {
    padding: "2.4rem 3.6rem",
    boxShadow: "var(--box-shadow)",
    borderRadius: "var(--border-radius)",
    backgroundColor: "var(--bg-color-sec)",

    "& > *": {
      marginTop: "1.2rem",
      marginBottom: "1.2rem",
    },

    "& .MuiIconButton-root": {
      padding: "0px",
    },
  },

  title: {
    fontSize: "2.4rem",
    color: "var(--text-color)",
  },

  labelIcon: {
    fontSize: "3.6rem",
    color: "var(--text-color)",
  },

  forgetPassword: {
    color: "var(--title-color)",
    opacity: 0.65,
    fontWeight: 500,
    fontSize: "1.4rem",
    textAlign: "right",
    marginBottom: "0px",

    "&:hover": {
      opacity: 1,
    },
  },

  icon: {
    fontSize: "1.8rem",
    color: "var(--grey)",
    cursor: "pointer",
  },
};

export const dialogMUIRoot = () => ({
  dialogPaper: {
    backgroundColor: "var(--bg-color-sec)",
  },

  title: {
    "& > *": {
      color: "var(--title-color)",
    },
  },

  content: {
    "& *": {
      color: "var(--text-color)",
    },
  },

  breakLine: {
    borderColor: "var(--border-color)",
  },
});
