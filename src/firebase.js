import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgWd5klFdSauH0LKsL5yvw2qSrTFnmdb8",
  authDomain: "disneyplus-clone-8750b.firebaseapp.com",
  projectId: "disneyplus-clone-8750b",
  storageBucket: "disneyplus-clone-8750b.appspot.com",
  messagingSenderId: "817914565278",
  appId: "1:817914565278:web:f5c369b7b7bd785e01a18f",
  measurementId: "G-RWX5J1ML8C",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const auth = firebase.auth(app);
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage(app);

export { auth, provider, storage };
export default db;
