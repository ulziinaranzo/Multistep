import React, { createContext, useState, useContext } from 'react';

export const SaveContext = createContext();


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
    setSaveData(prev => ({...prev, ...data}))
  }

  return (
    <SaveContext.Provider value={{ saveData, updateSaveData }}>
      {children}
    </SaveContext.Provider>
  );
};



import React, { createContext, useState, useContext } from 'react';
import { motion } from 'framer-motion';

export const SaveContext = createContext();

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

  const [animationState, setAnimationState] = useState(0); 

  const updateSaveData = (data) => {
    setSaveData(prev => ({ ...prev, ...data }));
  }

  const handleButtonClick = () => {
    setAnimationState(prev => {
      if (prev === 0) {
        return 1;
      } else if (prev === 1) {
        return 2;
      } else {
        return 0;
      }
    });
  }

  const backButtonAnimation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.5 },
  };

  const continueButtonAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
    transition: { duration: 0.5 },
  };

  return (
    <SaveContext.Provider value={{ saveData, updateSaveData }}>
      <motion.div
        initial="initial"
        animate={animationState === 1 ? "animate" : animationState === 2 ? "exit" : "initial"}
        variants={{
          initial: { opacity: 0, x: -200 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 200 },
          transition: { duration: 0.5 },
        }}
      >
        {children}
      </motion.div>

      <motion.button
        onClick={() => handleButtonClick()}
        className="bg-blue-500 text-white p-2 rounded-md"
        variants={backButtonAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Back
      </motion.button>

      <motion.button
        onClick={() => handleButtonClick()}
        className="bg-green-500 text-white p-2 rounded-md"
        variants={continueButtonAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Continue
      </motion.button>
    </SaveContext.Provider>
  );
};



import React, { createContext, useState, useContext } from 'react';
import { motion } from 'framer-motion';

export const SaveContext = createContext();

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

  const [animationState, setAnimationState] = useState(0); 

  const updateSaveData = (data) => {
    setSaveData(prev => ({ ...prev, ...data }));
  }

  const handleButtonClick = (isContinue) => {
    setAnimationState(prev => {
      if (prev === 0) {
        return 1;
      } else if (prev === 1) {
        return 2;
      } else {
        return 0;
      }
    });
  }

  const backButtonAnimation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.5 },
  };

  const continueButtonAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
    transition: { duration: 0.5 },
  };

  return (
    <SaveContext.Provider value={{ saveData, updateSaveData }}>
      <motion.div
        initial="initial"
        animate={animationState === 1 ? "animate" : animationState === 2 ? "exit" : "initial"}
        variants={{
          initial: { opacity: 0, x: -200 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 200 },
          transition: { duration: 0.5 },
        }}
      >
        {children}
      </motion.div>

      {/* Back Button */}
      <motion.button
        onClick={() => handleButtonClick(false)}  {/* Updated to indicate Back button */}
        className="bg-blue-500 text-white p-2 rounded-md"
        variants={backButtonAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Back
      </motion.button>

      {/* Continue Button */}
      <motion.button
        onClick={() => handleButtonClick(true)}  {/* Updated to indicate Continue button */}
        className="bg-green-500 text-white p-2 rounded-md"
        variants={continueButtonAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Continue
      </motion.button>
    </SaveContext.Provider>
  );
}; 
