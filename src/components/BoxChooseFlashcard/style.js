const boxChooseFlashcardStyle = () => ({
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

  flashcards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(130px,1fr))",
    gap: "1.6rem",
    padding: "2.4rem",
    overflowY: "auto",
    maxHeight: "calc(100% - 9rem)",

    "&::-webkit-scrollbar": {
      width: "0px !important",
    },
  },

  flashcardItem: {
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

  flashcardImg: {
    width: "5rem",
    height: "5rem",
    marginBottom: "12px",
  },

  flashcardTitle: {
    fontSize: "1.6rem",
    fontWeight: 400,
  },
});

export default boxChooseFlashcardStyle;
