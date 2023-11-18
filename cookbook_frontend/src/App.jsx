import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home"
import Category from './components/Category';
import Dish from './components/Dish';


function App() {
  return (
    <>
      <Header />
      <nav className='nav'>
        <Link className='link' to="/">Home</Link>
      </nav>
        <switch>
          <Routes>
            <Route path='/dish/:dishId/:dishName' element={<Dish />} />
            <Route path='/category/:categoryId/:categoryName' element={<Category />} />
            <Route path='/' element={<Home />} />
          
          </Routes>
        </switch>  
    </>
  );
}

export default App;
