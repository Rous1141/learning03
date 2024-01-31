
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
  const {theme,change,switchImage} = useContext(ThemeContext)
  const [currentIndex,SetIndex] = useState(0)
  var listofimages=theme.backgroundImage;
  useEffect(() =>{
      const intervalId = setInterval(()=>{
        // eslint-disable-next-line
        if(change){listofimages=theme.backgroundImage;SetIndex(listofimages.length-1);switchImage();};
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
      <div className="background" style={{transition:theme.transition,backgroundImage:`url('${listofimages[currentIndex]}')`}}>
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
