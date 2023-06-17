import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjEBXi-9oBdWZPBHQBHmZXAHV2Hq-a5FE",
  authDomain: "discord-clone-c4734.firebaseapp.com",
  projectId: "discord-clone-c4734",
  storageBucket: "discord-clone-c4734.appspot.com",
  messagingSenderId: "996990507804",
  appId: "1:996990507804:web:eb3fd87a55c298dacab8d9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;