import React from 'react'
import { ThemeContext } from './Themes/ThemeProvider.tsx';
import { useContext,useState,useEffect } from 'react';

export default function Background() {
  const {theme} = useContext(ThemeContext)
  const [currentIndex,SetIndex] = useState(0)
  const listofimages=theme.backgroundImage;
  useEffect(() =>{
      const intervalId = setInterval(()=>{
        if(currentIndex === listofimages.length - 1) {
          SetIndex(0);
      } 
      else {
        SetIndex(currentIndex + 1);
      }
      },5000)
      return () => clearInterval(intervalId);
  },)
  return (
    <div className='background' style={{backgroundImage:`url('${listofimages[currentIndex]}')`,transition:theme.transition}}>
      AAAAAA
    </div>
  )
}
