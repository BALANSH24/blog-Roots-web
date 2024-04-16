// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMDE2TGzjqGk18Sei_IwUm5rRtS2bHgXg",
  authDomain: "blogapp-2c1bc.firebaseapp.com",
  projectId: "blogapp-2c1bc",
  storageBucket: "blogapp-2c1bc.appspot.com",
  messagingSenderId: "619601107977",
  appId: "1:619601107977:web:50af47f44632505477acd8"
};
const app=initializeApp(firebaseConfig)
const auth=getAuth(app)
const firestore=getFirestore(app)
const storage=getStorage(app)

export{app,auth,firestore,storage}

