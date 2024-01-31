
import './App.css';
import Page from './Components/Page';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import PeopleDetail from './Components/PeopleDetail';
import UpdatePeople from './Components/UpdatePeople';
import Menu from './Components/Menu';
import CreatePeople from './Components/CreatePeople';
import { ThemeContext } from './Components/Themes/ThemeProvider.tsx';
import { useContext } from 'react';
function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className='App'>
      <div className="background" style={{backgroundImage:theme.backgroundImage,transition:theme.transition}}>
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
