import React from 'react'
import { Route,Routes, Outlet} from "react-router-dom"
import Page from './Page.jsx';
import Footer from './Footer.jsx';
import PeopleDetail from './PeopleDetail.jsx';
import UpdatePeople from './UpdatePeople.jsx';
import Menu from './Menu.jsx';
import CreatePeople from './CreatePeople.jsx';
import { ThemeContext } from '../Themes/ThemeProvider.tsx';
import { useContext, useState, useEffect } from 'react';


export default function Users() {
    const { theme,change,switchImage} = useContext(ThemeContext)
  const [currentIndex, SetIndex] = useState(0)
  var listofimages = theme.backgroundImage;
  useEffect(() => {
    const timeout = setTimeout(()=>{
      if(change){switchImage();SetIndex(listofimages.length-1);return () => clearTimeout(timeout)}
      // eslint-disable-next-line
      if (currentIndex === listofimages.length - 1) {
        SetIndex(0);
      }
      else {
        SetIndex(currentIndex + 1);
      }
  },6000)
  return () => clearTimeout(timeout)
  // eslint-disable-next-line
  },[currentIndex,switchImage])
  // const path = useMatch('/characters');
  return (
    <div>
        <Menu/>
        <div className="background" style={{ backgroundImage: `url('${listofimages[currentIndex]}')`, transition: theme.transition }}>
            <Routes>
                <Route path={`/`} element={<Page/>}/>
                <Route path={`:id`} element={<PeopleDetail />}/>
                <Route path={`:id/edit`} element={<UpdatePeople />}/>
                <Route path={`create`} element={<CreatePeople />}/>
            </Routes>
            <Outlet/>
            {/* Outlet is use to render child components */}
        </div>
        <Footer/>
    </div>
  )
}
