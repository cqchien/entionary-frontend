export const checkFileSize = (file, type) => {
  let valid = false;
  if (file) {
    const size = file.size / 1048576; //(1024**2)
    // Size of file is allowed 10 MB
    if (type === "image" && size <= 10) {
      valid = true;
    }
  }
  return valid;
};
