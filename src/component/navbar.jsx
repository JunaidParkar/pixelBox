import React from 'react'
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="navbarContainer">
        <div className="WelcomeUser">
          Hello, XYZ
        </div>
        <div className="logout">
          Log out
        </div>
      </div>
    </>
  )
}

export default Navbar
