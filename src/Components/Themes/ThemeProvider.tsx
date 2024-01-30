import React, { useState } from 'react'

type Theme =  string
type ThemeContext = {theme : Theme;toggleTheme: () => void}

export const ThemeContext = React.createContext(
  {} as ThemeContext
);

// export function ThemeProvider({children}){
//   let [theme,SetTheme] = useState("light")
//   const toggleTheme = () =>{
//   SetTheme(theme==="light" ? "light" : "dark")
//   }
//   let color,backgroundColor,backgroundImage;

     
  
//   return(
//     <ThemeContext.Provider value={{theme,toggleTheme}}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

export const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
