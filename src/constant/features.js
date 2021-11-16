import flashcardIcon from "../assets/icons/flashcard.png";
import gameIcon from "../assets/icons/game.png";
import { ROUTES } from "./routePath";

const FEATURES_LIST = [
  {
    featureTitle: "Flashcard",
    featureSubTitle:
      "Flashcards are the most effective method for remembering a new word.",
    imageUrl: flashcardIcon,
    urlToLink: ROUTES.FLASHCARD,
  },
  {
    featureTitle: "Game",
    featureSubTitle: "Play game can help you practice words in your flashcard.",
    imageUrl: gameIcon,
    urlToLink: ROUTES.GAME,
  },
];

export default FEATURES_LIST;
