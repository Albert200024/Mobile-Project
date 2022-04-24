import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './NavButton/CartBtn'
import Login from './NavButton/Login'
import SignUp from './NavButton/SignUp'

export default function Header() {
  return (
      <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid py-2 item">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse item" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <NavLink className="nav-link" aria-current="page" style={{fontSize:"20px"}} to="/">Home</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/products" style={{fontSize:"20px"}}>Product</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/about" style={{fontSize:"20px"}}>About</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link" to="/contact" style={{fontSize:"20px"}}>Contact</NavLink>
                          </li>
                      </ul>
                      <NavLink className="navbar-brand  fw-bold  text-center" 
                            to="/">
                          APPLE MART
                      </NavLink>
                      <div className='itemBtn'>
                         <Login/>
                        <SignUp/>
                        <CartBtn/>
                      </div>
                   
                  </div>
              </div>
          </nav>
      </>
  )
}
