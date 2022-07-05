import React, { useState, createContext } from "react";
import { LoginRequest } from "./authentication.service";
export const AuthenticationContext = createContext();
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

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
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
