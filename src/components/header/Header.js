import React from 'react'
import './header.css'
import dfLogo from './images/df-logo.png'

const Header = () => {
  return (
    <div className='container' id="container">
      <div className='header' id='header'>
        <div className='header-left' id='header-left'>
          <div className="df-logo" id='df-logo'>
            <img src={dfLogo} className="df-logo-img" alt="dataflow logo" />
          </div>
          <div className='logo-title-section'>
            <p>SUPPORT CENTRE</p>
          </div>
        </div>

        <div className='header-right-section' id='header-right-section'>
          <div className='header-right-welcome-sec'>
            <p>welcome</p>
            <p><b>Burhan mansoori</b></p>
          </div>

          <div className='header-right-auth-sec'>
            <a href='#'>Edit Profile</a>
            -
            <a href='#'>Sign Out</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header