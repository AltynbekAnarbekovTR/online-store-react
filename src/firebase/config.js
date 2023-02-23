// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTmUVoBoCXa269mHdGRhd2oIsipdcWhlA",
  authDomain: "online-store-ccf61.firebaseapp.com",
  projectId: "online-store-ccf61",
  storageBucket: "online-store-ccf61.appspot.com",
  messagingSenderId: "1034708234093",
  appId: "1:1034708234093:web:e55f6012c532645d7ff464",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export default app;
