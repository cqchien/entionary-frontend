const gameStyle = (theme) => ({
  root: {
    height: "80vh",
    width: "100%",
    marginTop: "80px",
    backgroundColor: "var(--bg-color-sec)",
    borderRadius: "16px",
    border: "solid 2px rgba(127,127,127,0.5)",
    overflow: "hidden",
  },

  nTotal: {
    padding: "12px 0",
    fontSize: "1.6rem",
    letterSpacing: "1.5px",
  },

  title: {
    padding: "1.6rem",
    textAlign: "center",
    position: "relative",

    "& h1": {
      border: "solid 2px rgba(127,127,127,0.5)",
      width: "max-content",
      padding: "1.4rem",
      margin: "auto",
      fontWeight: 500,
      borderRadius: "10px",
      color: "var(--title-color)",
      fontSize: "2rem",
    },
  },
  
  answerList: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "3.2rem",
  },

  answerItem: {
    borderRadius: "5px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",

    "& img": {
      width: "100%",
      height: "100%",
      transition: "all .25s",

      "&:hover, &:active": {
        transform: "scale(1.2)",
      },
    },

    [theme.breakpoints.up("sm")]: {
      width: 120,
      height: 120,
    },

    [theme.breakpoints.up("md")]: {
      width: 180,
      height: 180,
    },
  },

  doneTitle: {
    fontSize: "5.2rem",
    color: "var(--title-color)",
    marginBottom: "1.2rem",
  },

  doneResult: {
    fontSize: "2.4rem",
    color: "var(--text-color)",
  },

  timerWrap: {
    width: "80%",
    flexBasis: "30px",
    textAlign: "center",
    border: "solid 2px var(--grey)",
    margin: "0 auto 1.2rem",
    borderRadius: "12px",
    overflow: "hidden",
    position: "relative",
  },

  timer: {
    width: "100%",
    height: "100%",
    transition: "width 0.5s",
    backgroundColor: "var(--secondary-color)",
    background:
      "linear-gradient(90deg, var(--secondary-color) 0%, var(--secondary-color) 100%)",
  },

  timeStr: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "1.6rem",
    color: "#fff",
    fontWeight: 500,
    letterSpacing: "5px",
  },
});

export default gameStyle;
