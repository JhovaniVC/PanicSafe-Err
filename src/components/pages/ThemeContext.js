import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Define tus colores para ambos temas
  const theme = {
    darkMode,
    toggleDarkMode,
    colors: {
      background: darkMode ? "#121212" : "#f5f5f5",
      text: darkMode ? "#ffffff" : "#333333",
      card: darkMode ? "#1e1e1e" : "#ffffff",
      header: darkMode ? "#000000" : "#3396FE",
      primary: "#3396FE", // Color primario que se mantiene
      danger: "#FF2929", // Color para botones de emergencia
      border: darkMode ? "#333333" : "#DDDDDD",
      placeholder: darkMode ? "#666666" : "#AAAAAA",
      danger: "#FF3B30", // Color rojo para emergencia
      secondaryText: darkMode ? "#AAAAAA" : "#666666",
      inputBackground: darkMode ? "#252525" : "#ffffff",
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
