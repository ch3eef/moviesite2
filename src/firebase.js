import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import firebase from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyBXsHdsXCm3qL44thFawndEdRL_6C1pwg4",
  authDomain: "busyhobby.firebaseapp.com",
  projectId: "busyhobby",
  storageBucket: "busyhobby.appspot.com",
  messagingSenderId: "981255242491",
  appId: "1:981255242491:web:e1a31554a18bd46007a65e",
  measurementId: "G-SKV101Q7M1"
}



const app = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
export const auth = getAuth(app)
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();


export { provider, default };
// export default app;