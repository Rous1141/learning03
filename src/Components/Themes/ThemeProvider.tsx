import React, {useState } from 'react'

//type Theme =  string

const Theme = {
  light:{
    color:'#0096FA',
    backgroundColor:'#FFF',
    backgroundImage:'url("https://gamepress.gg/lostword/sites/lostword/files/2022-06/0260_%E3%83%90%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0%E3%83%BB%E3%83%A9%E3%83%96%E3%83%AC%E3%82%BF%E3%83%BC%EF%BC%9F.png")',
    transition: 'all 1s ease-in-out'
  },
  dark:{
    color:'#61dafb',
    backgroundColor:'#1a1a2e',
    backgroundImage:'url("https://gamepress.gg/lostword/sites/lostword/files/2023-05/314_StoryCard.png")',
    transition: 'all 1s ease-in-out'
  },
}

const initialState = {
  dark: false,
  theme: Theme.light,
  toggleTheme: () => {}
}

const ThemeContext = React.createContext(initialState);

function ThemeProvider({children}) {
  const [dark,SetDark] = useState(false)
  const toggleTheme = () => {
    !dark ? SetDark(true) : SetDark(false)
  }
  const theme = dark ? Theme.dark : Theme.light
  return (
    <ThemeContext.Provider value={{theme,dark,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}


export {ThemeContext,ThemeProvider}