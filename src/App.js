
import './App.css';
import Page from './Components/Page';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import PeopleDetail from './Components/PeopleDetail';

function App() {
  return (
    <div className='App'>
      <div className="background">
        <Routes>
          <Route path='/' element={<Page/>}></Route>
          <Route path='/Details/:id' element={<PeopleDetail/>}></Route>
          </Routes>
      <Footer/>
      </div>
   </div>
  );
}

export default App;
