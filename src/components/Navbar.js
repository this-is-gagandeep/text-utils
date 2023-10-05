import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar(props) {

  const [myStyle, setmyStyle] = useState({
    color: 'white',
    backgroundcolor: 'black',
    padding: '20px'
  })
  const [navText, setnavText] = useState("Enable Light Mode")

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setmyStyle({
        color: 'black',
        backgroundcolor: 'white'
        , padding: '20px'
      })
      setnavText("Enable Light mode")
    }
    else {
      setmyStyle({
        color: 'white',
        backgroundcolor: 'black'
        , padding: '20px'
      })
      setnavText("Enable Dark mode")
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark shadow-5-strong border border-white mb-5 " style={myStyle}>
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav black me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">About</NavLink>
              </li>
            </ul>
          </div>
          <div className="colorMode">
            <div onClick={toggleStyle} class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label class="form-check-label" for="flexSwitchCheckDefault"> <h5>{navText}</h5></label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = { titile: PropTypes.string }