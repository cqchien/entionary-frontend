const galleryItemStyle = (theme) => ({
  root: {
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,

      width: "100%",
      height: "100%",

      backgroundColor: "rgba(0,0,0,0.45)",
      zIndex: 1,
    },

    "& .background": {
      backgroundImage: (props) => `url(${props.picture})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",

      width: "100%",
      height: "100%",
      transition: "all 0.45s",

      position: "absolute",
      top: 0,
      left: 0,
    },

    "&:hover .background": {
      transform: "scale(1.3)",
    },
  },

  content: {
    zIndex: 2,
    padding: "0.8rem",
    "& > *": {
      textAlign: "center",
      color: "#fff",
    },
  },

  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    textTransform: "capitalize",

    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
    },
  },

  name: {
    fontSize: "1rem",
    fontWeight: 500,
    letterSpacing: "1px",
    margin: "0.2rem 0",
    textTransform: "capitalize",

    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  },

  option: {
    fontSize: "1rem",
    letterSpacing: "1px",
    fontStyle: "italic",

    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
  },
});

export default galleryItemStyle;
