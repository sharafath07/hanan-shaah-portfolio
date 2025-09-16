import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <div>
      <header>
        <div>
          <img src={logo} alt="" />
          <h1>HS</h1>
        </div>
        <div>
          <nav>
            <a href='#'><li>Home</li></a>
            <a href='#about'><li>About</li></a>
            <a href='#music'><li>Music</li></a>
            <a href='#events'><li>Events</li></a>
            <a href='#vlogs'><li>Vlog</li></a>
            <a href='#contact'><li>Contact</li></a>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
