import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#2c3e50' , color:'white'}}>
        <div className="container">
          <Link to={''} className="navbar-brand" style={{ color: 'white' ,fontWeight: 'bold'}}>START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'about'} className="nav-link" style={{ color: 'white' ,fontWeight: 'bold'}}>About</Link>
              </li>
              <li className="nav-item">
                <Link to={'portfolio'} className="nav-link" style={{ color: 'white',fontWeight: 'bold' }} >Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to={'contact'} className="nav-link" style={{ color: 'white' ,fontWeight: 'bold'}}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
