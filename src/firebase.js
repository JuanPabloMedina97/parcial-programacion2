// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyCxqicy93KPtxQ-bVB-E49Dp40s5vSbI",
  authDomain: "prueba-programacion-utn.firebaseapp.com",
  projectId: "prueba-programacion-utn",
  storageBucket: "prueba-programacion-utn.appspot.com",
  messagingSenderId: "33043329215",
  appId: "1:33043329215:web:f0e410c026b3d7a70c160a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

