import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiMKO-BR2l0bWZ-GuBnzIWO3m9kAbHXOs",
  authDomain: "chatt-a75fe.firebaseapp.com",
  databaseURL: "https://chatt-a75fe-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatt-a75fe",
  storageBucket: "chatt-a75fe.appspot.com",
  messagingSenderId: "1051874606572",
  appId: "1:1051874606572:web:5b366f4582fd120b6054c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);