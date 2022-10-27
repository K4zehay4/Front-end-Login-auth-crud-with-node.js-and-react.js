/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {  reset,LogOut } from "../features/authSlice";

const SideBar = () => {
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
        <aside className=''>
  <p className="menu-label">
    General
  </p>
  <ul className="menu-list">
    <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li> 
     </ul>
  <p className="menu-label">
    Admin
  </p>
  <ul className="menu-list">
    <li><NavLink to={"/users"}>Kelola Data Users</NavLink></li>
    <li><NavLink to={"/murid"}>Kelola Data Santri</NavLink></li>
    <li><NavLink to={"/akademic"}>Kelola Kalender Akademik</NavLink></li>
    <li><NavLink to={"#"}>Kelola quesioner</NavLink></li>
    
  </ul>
  <p className="menu-label">
    USER
  </p>
  <ul className="menu-list">
  <li><NavLink to={"/kalender"}>Kalender Akademik</NavLink></li>
  <li><NavLink to={"/murid/add"}>Pendaftaran</NavLink></li>
  <li><NavLink to={"#"}>Pembayaran</NavLink></li>
  <li><NavLink to={"#"}>quesioner</NavLink></li>
      </ul>
  <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              Logout
            </button>
          </li>
        </ul>
</aside>
    </div>
  )
}

export default SideBar