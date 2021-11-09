import { useHistory } from "react-router";
import GalleryItem from "../components/GalleryItem";
import { ROUTES } from "../constant/routePath";

const FlashcardDetail = (flashcardInfo) => {
  const history = useHistory();
  const handleGetDetailFlashcard = (id) => {
    history.push(`${ROUTES.FLASHCARD}/${id}`);
  };

  return (
    <GalleryItem
      {...flashcardInfo}
      handleGetDetail={handleGetDetailFlashcard}
    />
  );
};

export default FlashcardDetail;
