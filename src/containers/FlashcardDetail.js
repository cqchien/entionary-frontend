import GalleryItem from "../components/GalleryItem";

const FlashcardDetail = (flashcardInfo) => {
  const handleGetDetailFlashcard = (id) => {
    console.log(id);
  };

  return (
    <GalleryItem
      {...flashcardInfo}
      handleGetDetail={handleGetDetailFlashcard}
    />
  );
};

export default FlashcardDetail;
