import React, { useState, createContext } from "react";
import { LoginRequest } from "./authentication.service";
export const AuthenticationContext = createContext();
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const auth = getAuth();
  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // const uid = user.uid;
      setUser(usr);
      setIsLoading(false);
      // ...
    } else {
      // User is signed out
      // ...
      setIsLoading(false);
    }
  });

  const onLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
        setError(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const onLogin = async (email, password) => {
    setIsLoading(true);
    try {
      const u = await LoginRequest(email, password);
      if (u.code) {
        setError(u.code);
      } else {
        setUser(u);
      }
      // setUser(u);

      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    const auth = getAuth();
    if (password !== repeatedPassword) {
      setError("Error: passwords do not mathch");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        isAuthenticated: !!user,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
