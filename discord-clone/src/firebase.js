import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDjEBXi-9oBdWZPBHQBHmZXAHV2Hq-a5FE",
  authDomain: "discord-clone-c4734.firebaseapp.com",
  projectId: "discord-clone-c4734",
  storageBucket: "discord-clone-c4734.appspot.com",
  messagingSenderId: "996990507804",
  appId: "1:996990507804:web:eb3fd87a55c298dacab8d9"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;