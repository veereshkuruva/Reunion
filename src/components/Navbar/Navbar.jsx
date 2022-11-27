import React from 'react'
import { useState } from 'react'
import './Nav.css'
import { Link, useNavigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  // const navigate =useNavigate()
  return (
    <>

      <div className='header'>
        <Link to='/'> <h1 className='logo'>Estatery</h1></Link>

        <div className='shop-cart' >
          <Link to='/fav'><i class="fa-solid fa-bag-shopping" ></i></Link>

        </div>


        <ul className={click ? "nav-menu active" : "nav-menu"}>

          <li><a href='#'>Rent</a></li>
          <li><a href='#'>Buy</a></li>
          <li><a href='#'>Sell</a></li>
          <li><a href='#'>Manage Property</a></li>
          <li><a href='#'>Resource</a></li>
        </ul>

        <a href='#'><button className='btn1'>login</button></a>
        <a href='#'><button className='btn1'>signup</button></a>
        <div className='hambagger' onClick={handleClick}>
          {
            click ? (<i class="fa fa-times crossover" aria-hidden="true"></i>) : (<i className='fas fa-bars toggle'></i>)
          }

        </div>
      </div>
    </>
  )
}

export default Navbar