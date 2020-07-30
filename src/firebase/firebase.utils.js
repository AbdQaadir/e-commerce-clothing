import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATxlyuL1n-ZbNOiv9GFmEiofgj_QvSp4Y",
  authDomain: "crown-db-7ba39.firebaseapp.com",
  databaseURL: "https://crown-db-7ba39.firebaseio.com",
  projectId: "crown-db-7ba39",
  storageBucket: "crown-db-7ba39.appspot.com",
  messagingSenderId: "483550990611",
  appId: "1:483550990611:web:48df6e7319b5c455800ae6",
  measurementId: "G-C267V8ZZP0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
