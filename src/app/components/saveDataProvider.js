"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const SaveContext = createContext({});

export const SaveDataProvider = ({ children }) => {
  const [saveData, setSaveData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    img: null,
    date: "",
  });

  const updateSaveData = (data) => {
    setSaveData((prev) => ({ ...prev, ...data }));
  };

  // const backButtonAnimation = {
  //   initial: { opacity: 0, x: -100 },
  //   animate: { opacity: 1, x: 0 },
  //   exit: { opacity: 0, x: -100 },
  //   transition: { duration: 0.5 },
  // };

  // const continueButtonAnimation = {
  //   initial: { opacity: 0, x: 100 },
  //   animate: { opacity: 1, x: 0 },
  //   exit: { opacity: 0, x: 100 },
  //   transition: { duration: 0.5 },
  // };

  return (
    <SaveContext.Provider
      value={{
        saveData,
        updateSaveData,
      }}
    >
      {children}
    </SaveContext.Provider>
  );
};
