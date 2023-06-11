// LanguageContext.js
import React, { createContext, useState } from 'react';

// Create the language context
const LanguageContext = createContext();

// Create a provider component for the language context
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Set a default language

  // Define functions to update the language
  const setLanguage = (language) => {
    setCurrentLanguage(language);
  };

  // Create the value object with the current language and setLanguage function
  const value = {
    language: currentLanguage,
    setLanguage: setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
