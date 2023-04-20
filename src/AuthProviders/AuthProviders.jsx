import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import app from "../firebase/Firebase";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (mail, pass) => {
    return createUserWithEmailAndPassword(auth, mail, pass);
  };
  const signInUser = (mail, pass) => {
    return signInWithEmailAndPassword(auth, mail, pass);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unSubscirbe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth State Changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscirbe();
    };
  }, []);
  const logOut = () => {
    return signOut(auth);
  };
  const data = {
    user,
    createUser,
    signInUser,
    logOut,
    loading,
    googleSignIn,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
