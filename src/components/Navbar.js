import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (   
      <div>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand" href="#">Khalo BC</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Khalo BC</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='SignIn' className="nav-link">Sign In</Link>
          </li>
          <li className="nav-item">
            <Link to='login' className="nav-link">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
      </div>

    )
}          
