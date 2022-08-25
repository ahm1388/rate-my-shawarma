import React from 'react'
import image from './image.png'
import './styles.css'

const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="siteTitle">
            <img className="siteLogo" src={image} alt="logo" />
            <h1 className="siteName">Rate my Shawarma</h1>
        </div>
        <button className="signIn">Sign In</button>
    </div>
  )
}

export default Navbar