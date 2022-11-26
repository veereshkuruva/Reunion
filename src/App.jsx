import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Fav from './components/FavComp/Fav';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
const App = () => {
  return (
    <div>
      <Navbar/>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/fav' element={<Fav/>}/>
        </Routes>
           
    </div>
  )
}

export default App
