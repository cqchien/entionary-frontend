export const readFile = (file) => {
  // use buil-in of js
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  return new Promise((resolve, reject) => {
    fileReader.onload = (event) => {
      // image with base64
      const file = event.target.result;
      return resolve(file);
    };

    fileReader.onerror = () => {
      return reject();
    };
  });
};
