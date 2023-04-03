import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getStorage } from "@firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMLFE6qtDcZUFT76hnxJqniWiENaYQwUw",
  authDomain: "chat-24bf6.firebaseapp.com",
  projectId: "chat-24bf6",
  storageBucket: "chat-24bf6.appspot.com",
  messagingSenderId: "448141639864",
  appId: "1:448141639864:web:f7ba7f200461eeac35b44d",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
