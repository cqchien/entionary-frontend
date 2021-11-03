import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMpHDfBg97fLsWp_1h9ndTig3kmDE-BY4",
  authDomain: "entionary.firebaseapp.com",
  projectId: "entionary",
  storageBucket: "entionary.appspot.com",
  messagingSenderId: "79538994406",
  appId: "1:79538994406:web:93036ca1365651c7254f27",
  measurementId: "G-X0LBRZEKPD",
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export { storage, ref, uploadBytes, getDownloadURL };
