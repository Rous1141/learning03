import React, {useState} from 'react'

//type Theme =  string
const lightimages = [
  "https://gamepress.gg/lostword/sites/lostword/files/2022-06/0260_%E3%83%90%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0%E3%83%BB%E3%83%A9%E3%83%96%E3%83%AC%E3%82%BF%E3%83%BC%EF%BC%9F.png",
  "https://gamepress.gg/lostword/sites/lostword/files/2023-12/289_StoryCard.png",
  "https://gamepress.gg/lostword/sites/lostword/files/2023-12/312_StoryCard.png",
  "https://gamepress.gg/lostword/sites/lostword/files/2022-06/0271_%E5%85%8E%E3%81%9F%E3%81%A1%E3%81%AE%E4%BC%91%E6%81%AF.png"
  ]
const darkimages = [
    "https://gamepress.gg/lostword/sites/lostword/files/2022-02/132.png",
    "https://gamepress.gg/lostword/sites/lostword/files/2022-02/0207_%E9%AD%94%E4%BB%A4%E5%AC%A2.png",
    "https://gamepress.gg/lostword/sites/lostword/files/2022-02/0280_%E3%83%89%E3%82%AE%E3%83%BC%E3%83%BB%E3%82%AA%E3%83%BC%E3%83%80%E3%83%BC.png",
    "https://gamepress.gg/lostword/sites/lostword/files/story_cards/0085_%E2%98%863_Eientei.png"
  ]

const Theme = {
  light:{
    color:'#0096FA',
    backgroundColor:'#FFF',
    backgroundImage: lightimages,
    transition: 'all 1s ease-in-out',

  },
  dark:{
    color:'#61dafb',
    backgroundColor:'#1a1a2e',
    backgroundImage: darkimages,
    transition: 'all 1s ease-in-out',
  },
}

const initialState = {
  dark: false,
  theme: Theme.light,
  change: false,
  toggleTheme: () => {},
  switchImage: () => {},
}

const ThemeContext = React.createContext(initialState);

function ThemeProvider({children}) {
  const [dark,SetDark] = useState(false)
  const [change,SetChange] = useState(false)
  const toggleTheme = () => {
    !dark ? SetDark(true) : SetDark(false)
    SetChange(true)
  }
  const switchImage = () =>{
    SetChange(false)
  }
  const theme = dark ? Theme.dark : Theme.light
  return (
    <ThemeContext.Provider value={{theme,dark,change,toggleTheme,switchImage}}>
      {children}
    </ThemeContext.Provider>
  )
}


export {ThemeContext,ThemeProvider}