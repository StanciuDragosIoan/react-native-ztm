import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDC2X-AAN5Nnu0XpHiLLWHl0MXIfNcSI3k",
  authDomain: "mealstogo-78cce.firebaseapp.com",
  projectId: "mealstogo-78cce",
  storageBucket: "mealstogo-78cce.appspot.com",
  messagingSenderId: "389868775204",
  appId: "1:389868775204:web:4841564bcf91346015b5b1",
};

initializeApp(firebaseConfig);

export const LoginRequest = async (email, password) => {
  console.log(email, password);

  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const usr = userCredential.user;
    console.log("LOGGED IN withCheck");
    return usr;
  } catch (err) {
    console.log("NOT LOGGED IN");
    return err;
  }
};
