import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderScreen.css'

const HeaderScreen = () => {

  const navBar = useRef()

  const clickMenu = () =>{
    navBar.current.classList.toggle('navbar-open')
  }

  return (
    <header className='header'>
      <h1 className='header-title'>e-commerce</h1>
      <div onClick={clickMenu} className='header-menubar'>
        <i class="fa-solid fa-bars"></i>
      </div>

      <nav ref={navBar} className='navbar'>
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink to='/login' className="navbar-link">
              <i className="fa-solid fa-user"></i>
              <p className="navbar-link-label">Login</p>
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to='/purchases' className="navbar-link">
              <i className="fa-solid fa-money-check"></i>
              <p className="navbar-link-label">Purchases</p>
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to='/cart' className="navbar-link">
              <i className="fa-solid fa-cart-shopping"></i>
              <p className="navbar-link-label">Cart</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderScreen