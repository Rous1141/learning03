
import './App.css';
import Page from './Components/Page';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import PeopleDetail from './Components/PeopleDetail';
import UpdatePeople from './Components/UpdatePeople';
import Menu from './Components/Menu';

function App() {
  return (
    <div className='App'>
      <div className="background">
        <Menu/>
        <Routes>
          <Route path='/' element={<Page/>}></Route>
          <Route path='/Details/:id' element={<PeopleDetail/>}></Route>
          <Route path='/Update/:id' element={<UpdatePeople/>}></Route>
          </Routes>
      <Footer/>
      </div>
   </div>
  );
}

export default App;
