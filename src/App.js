
import './App.css';
import { Route, Routes } from 'react-router-dom';
// // import Page from './Components/Users/Page.jsx';
// // import Footer from './Components/Users/Footer.jsx';
// import PeopleDetail from './Components/Users/PeopleDetail.jsx';
// import UpdatePeople from './Components/Users/UpdatePeople.jsx';
// // import Menu from './Components/Users/Menu.jsx';
// import CreatePeople from './Components/Users/CreatePeople.jsx';
// // import { ThemeContext } from './Components/Themes/ThemeProvider.tsx';
// // import { useContext, useState, useEffect } from 'react';
import FrontPage from './Components/FrontPage.jsx';
import Admin from './Components/Admin/Admin.jsx'
import Mod from './Components/Mods/Mod.jsx';
import Users from './Components/Users/Users.jsx';
function App() {
  // const { theme,change,switchImage} = useContext(ThemeContext)
  // const [currentIndex, SetIndex] = useState(0)
  // var listofimages = theme.backgroundImage;
  // useEffect(() => {
  //   const timeout = setTimeout(()=>{
  //     if(change){switchImage();SetIndex(listofimages.length-1)}
  //     // eslint-disable-next-line
  //     if (currentIndex === listofimages.length - 1) {
  //       SetIndex(0);
  //     }
  //     else {
  //       SetIndex(currentIndex + 1);
  //     }
  // },4000)
  // return () => clearTimeout(timeout)
  // // eslint-disable-next-line
  // },[currentIndex,switchImage])

  return (
    <div className='App'>
        {/* <Menu />
        <div className="background" style={{ backgroundImage: `url('${listofimages[currentIndex]}')`, transition: theme.transition }}>
        <Routes>
          <Route path='/' element={<Page />}> </Route>
          <Route path='/Details/:id' element={<PeopleDetail />}></Route>
          <Route path='/Update/:id' element={<UpdatePeople />}></Route>
          <Route path='/Create' element={<CreatePeople />}></Route>
        </Routes>
        </div>
        <Footer /> */}
        <Routes>
          <Route path='/' element={<FrontPage/>}/>
          <Route path="/admin" element={<Admin/>}>

            </Route>
          <Route path="/mod" element={<Mod/>}>

            </Route>
          <Route path="/characters/*" element={<Users/>}>

          </Route>
        </Routes>
    </div>
  );
}

export default App;
