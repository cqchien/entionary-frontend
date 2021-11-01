export const checkFileType = (file, fileType) => {
  const valid = false;
  if (file) {
    if (fileType === "image" && file.type.split("/")[0] === "image") {
      return true;
    }
  }
  return valid;
};
