const boxChooseTopicStyle = () => ({
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

  topicItem: {
    minHeight: "130px",
    height: "100%",
    backgroundColor: "var(--bg-color-accent)",
    borderRadius: "8px",
    cursor: "pointer",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    transition: "all 0.35s",
    "&:hover, &:active": {
      backgroundColor: "var(--hover-color)",
    },
  },

  topicImg: {
    width: "5rem",
    height: "5rem",
    marginBottom: "12px",
  },

  topicTitle: {
    fontSize: "2rem",
    fontWeight: 500,
  },

  score: {
    fontSize: "1.5rem",
    fontWeight: 300,
  },
});

export default boxChooseTopicStyle;
