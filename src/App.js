
import './App.css';
import Page from './Components/Page';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import PeopleDetail from './Components/PeopleDetail';
import UpdatePeople from './Components/UpdatePeople';
import Menu from './Components/Menu';
import CreatePeople from './Components/CreatePeople';
import { ThemeContext } from './Components/Themes/ThemeProvider.tsx';
import { useContext,useState,useEffect } from 'react';
function App() {
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
    <div className='App'>
      <div className="background" style={{backgroundImage:`url('${listofimages[currentIndex]}')`,transition:theme.transition}}>
        <Menu/>
        <Routes>
          <Route path='/' element={<Page/>}></Route>
          <Route path='/Details/:id' element={<PeopleDetail/>}></Route>
          <Route path='/Update/:id' element={<UpdatePeople/>}></Route>
          <Route path='/Create' element={<CreatePeople/>}></Route>
          </Routes>
      <Footer/>
      </div>
   </div>
  );
}

export default App;
