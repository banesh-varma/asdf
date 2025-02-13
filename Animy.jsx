import React from 'react'
import {Outlet,Link} from "react-router-dom"
import './Style.css'
function Animy() {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div class="container-fluid">
        <Link to={'Home'} className='nav-link text-danger ms-3 logo'>PALLAVI ADDALA</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to={'/'} className='nav-link'>Home</Link>
              </li>
              <li class="nav-item">
                <Link to={'About'} className='nav-link'>About</Link>
              </li>
              <li class="nav-item">
                <Link to={'Skills'} className='nav-link'>Skills</Link>
              </li>
              <li class="nav-item">
                <Link to={'Work'} className='nav-link'>Work</Link>
              </li>
              <li class="nav-item">
                <Link to={'Contact'} className='nav-link'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Animy