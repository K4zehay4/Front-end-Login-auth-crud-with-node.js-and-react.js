/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {NavLink,useNavigate} from "react-router-dom";
import logo from "../logo.png"
import { useDispatch, useSelector } from "react-redux";
import {  reset,LogOut } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div>
        <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink to="/dashboard"className="navbar-item">
              <img src={logo} width="112" height="28" alt="logo"/>
            </NavLink>
        
            <a href='#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" className="navbar-menu">
            {/* <div className="navbar-start">
              <a className="navbar-item">
                Home
              </a>
        
              <a className="navbar-item">
                Documentation
              </a>
        
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  More
                </a>
        
                <div className="navbar-dropdown">
                  <a className="navbar-item">
                    About
                  </a>
                  <a className="navbar-item">
                    Jobs
                  </a>
                  <a className="navbar-item">
                    Contact
                  </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>
            </div> */}
        
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button onClick={logout}  className="button is-primary">
                    logout
                  </button>
                  </div>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar;