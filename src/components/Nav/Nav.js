import React from 'react'
import '../Nav/Nav.css'
import { Link, Route,Routes } from 'react-router-dom'
import Printpage from '../PrintPage/Printpage';
import Home from '../Home/Home';
function Nav() {
  return (
    <div>
        <ul className='nav-links'>
          <li>
          <Link to="/Home" style={{ textDecoration: 'none' }}>Home</Link>
          </li>
          <li>
            <Link to="/PrintPage" style={{ textDecoration: 'none' }}>Print Page</Link>
            </li>
          <li>About</li>
        </ul>
     
    <Routes>
      <Route path='/PrintPage' element={<Printpage/>} ></Route>
      <Route path='/Home' element={<Home/>} ></Route>
      
    </Routes>
    </div>
    
    
  );
}

export default Nav;