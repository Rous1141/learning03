
import './App.css';
import Page from './Components/Page';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import PeopleDetail from './Components/PeopleDetail';
import UpdatePeople from './Components/UpdatePeople';
import Menu from './Components/Menu';
import CreatePeople from './Components/CreatePeople';

function App() {
  return (
    <div className='App'>
      <div className="background">
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
