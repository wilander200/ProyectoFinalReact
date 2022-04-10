import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZSLr3ah400OxNxCEVAKdiS35qiu5vbIQ",
  authDomain: "gustavovelazcods.firebaseapp.com",
  projectId: "gustavovelazcods",
  storageBucket: "gustavovelazcods.appspot.com",
  messagingSenderId: "294115364608",
  appId: "1:294115364608:web:1fc7dea323b5dc5c00ade5"
};

const app = initializeApp(firebaseConfig);

export const getFireStoreApp = () => { 
    return app
}