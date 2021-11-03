import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "../configs/firebaseStorage";

export const uploadImageToFirebase = async (image) => {
  // ref:  you must create a reference to the file you want to operate on. A reference can be thought of as a pointer to a file in the cloud.
  // storageRef now points to "images/.."
  const storageRef = ref(storage, `images/${image.name}`);

  try {
    // 'file' comes from the Blob or File API
    // Upload to firebase based on the reference of storage
    await uploadBytes(storageRef, image);
    const imageUrl = await getDownloadURL(storageRef);
    
    return { data: imageUrl, error: false };
  } catch (error) {
    return { data: error, error: true };
  }
};
